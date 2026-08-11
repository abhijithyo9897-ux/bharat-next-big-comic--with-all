import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Rect, Text, Transformer, Group } from 'react-konva';
import GridSystem from './GridSystem';
import SpeechBalloon from './SpeechBalloon';
import SFXText from './SFXText';
import RightInspector from './RightInspector';

const ComicCanvas = () => {
  const [elements, setElements] = useState([
    { id: '1', type: 'panel', x: 50, y: 50, width: 200, height: 200, fill: '#f8fafc', stroke: 'black', title: 'Start' },
    { id: '2', type: 'panel', x: 270, y: 50, width: 300, height: 200, fill: '#f8fafc', stroke: 'black', title: 'Middle' }
  ]);

  const [selectedId, selectShape] = useState(null);
  const [stageScale, setStageScale] = useState(1);
  const [stageX, setStageX] = useState(0);
  const [stageY, setStageY] = useState(0);
  const [showGrid, setShowGrid] = useState(true);
  
  const trRef = useRef();
  const layerRef = useRef();
  const stageRef = useRef(null);

  useEffect(() => {
    if (selectedId) {
      const node = layerRef.current.findOne('#' + selectedId);
      if (node) {
        trRef.current.nodes([node]);
        trRef.current.getLayer().batchDraw();
      }
    }
  }, [selectedId, elements]); // added elements to dependency to update transform box if props change

  const checkDeselect = (e) => {
    const clickedOnEmpty = e.target === e.target.getStage() || e.target.attrs.id === 'bg';
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  const handleWheel = (e) => {
    e.evt.preventDefault();
    const scaleBy = 1.1;
    const stage = e.target.getStage();
    const oldScale = stage.scaleX();
    const pointer = stage.getPointerPosition();

    const mousePointTo = {
      x: (pointer.x - stage.x()) / oldScale,
      y: (pointer.y - stage.y()) / oldScale,
    };

    let newScale = e.evt.deltaY < 0 ? oldScale * scaleBy : oldScale / scaleBy;
    newScale = Math.max(0.1, Math.min(newScale, 5));

    setStageScale(newScale);
    setStageX(pointer.x - mousePointTo.x * newScale);
    setStageY(pointer.y - mousePointTo.y * newScale);
  };

  const handleDragEnd = (e, id) => {
    setElements(
      elements.map((el) => {
        if (el.id === id) {
          return { ...el, x: e.target.x(), y: e.target.y() };
        }
        return el;
      })
    );
  };

  const handleChange = (id, newProps) => {
    setElements(
      elements.map((el) => {
        if (el.id === id) {
          return { ...el, ...newProps };
        }
        return el;
      })
    );
  };

  const handleTransformEnd = (e, id) => {
    const node = e.target;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    node.scaleX(1);
    node.scaleY(1);

    handleChange(id, {
      x: node.x(),
      y: node.y(),
      width: Math.max(5, node.width() * scaleX),
      height: Math.max(5, node.height() * scaleY),
    });
  };

  const handleDrop = (e) => {
    e.preventDefault();
    stageRef.current.setPointersPositions(e);
    
    const dropPosition = stageRef.current.getPointerPosition();
    const scale = stageScale;
    
    const x = (dropPosition.x - stageX) / scale;
    const y = (dropPosition.y - stageY) / scale;

    const dragData = e.dataTransfer.getData('text/plain');
    if (dragData) {
      try {
        const item = JSON.parse(dragData);
        if (item.type === 'panel') {
          const newPanel = {
            id: Date.now().toString(),
            type: 'panel',
            x: x - 100, 
            y: y - 100, 
            width: 200,
            height: 200,
            fill: '#f8fafc',
            stroke: 'black',
            title: item.title
          };
          setElements(elements.concat([newPanel]));
        } else if (item.type === 'balloon') {
          const newBalloon = {
            id: Date.now().toString(),
            type: 'balloon',
            x: x - 75,
            y: y - 50,
            width: 150,
            height: 100,
            text: item.text,
            fontSize: 14
          };
          setElements(elements.concat([newBalloon]));
        } else if (item.type === 'sfx') {
          const newSfx = {
            id: Date.now().toString(),
            type: 'sfx',
            x: x - 50,
            y: y - 30,
            width: 150,
            height: 60,
            text: item.text,
            fontSize: 60
          };
          setElements(elements.concat([newSfx]));
        } else if (item.type === 'template') {
          const newPanels = [];
          if (item.layout === '3-vertical') {
            for (let i = 0; i < 3; i++) {
              newPanels.push({
                id: Date.now().toString() + i,
                type: 'panel',
                x: x - 150,
                y: y - 200 + (i * 150),
                width: 300,
                height: 130,
                fill: '#f8fafc',
                stroke: 'black',
                title: `Panel ${i+1}`
              });
            }
          } else if (item.layout === '4-grid') {
            for (let i = 0; i < 2; i++) {
              for (let j = 0; j < 2; j++) {
                newPanels.push({
                  id: Date.now().toString() + i + j,
                  type: 'panel',
                  x: x - 160 + (j * 170),
                  y: y - 160 + (i * 170),
                  width: 150,
                  height: 150,
                  fill: '#f8fafc',
                  stroke: 'black',
                  title: `Grid ${i}-${j}`
                });
              }
            }
          } else if (item.layout === 'splash') {
            newPanels.push({
              id: Date.now().toString(),
              type: 'panel',
              x: x - 250,
              y: y - 350,
              width: 500,
              height: 700,
              fill: '#f8fafc',
              stroke: 'black',
              title: `Splash Page`
            });
          }
          setElements(elements.concat(newPanels));
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const [globalSettings, setGlobalSettings] = useState({ readingFlow: 'LTR' });
  const selectedElementData = elements.find(el => el.id === selectedId);

  return (
    <div 
      className="canvas-wrapper" 
      onDrop={handleDrop} 
      onDragOver={(e) => e.preventDefault()}
      style={{ width: '100%', height: '100%', overflow: 'hidden', margin: 0, position: 'relative' }}
    >
      <button 
        className="btn" 
        style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}
        onClick={() => setShowGrid(!showGrid)}
      >
        {showGrid ? 'Hide Grid' : 'Show Grid'}
      </button>

      <RightInspector 
        selectedElement={selectedElementData} 
        onChange={handleChange} 
        globalSettings={globalSettings}
        onGlobalSettingsChange={setGlobalSettings}
      />

      <Stage 
        ref={stageRef}
        width={window.innerWidth - 580} 
        height={window.innerHeight - 48}
        onWheel={handleWheel}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        scaleX={stageScale}
        scaleY={stageScale}
        x={stageX}
        y={stageY}
        draggable
      >
        <Layer ref={layerRef}>
          <Rect id="bg" x={0} y={0} width={800} height={1000} fill="#ffffff" shadowColor="black" shadowBlur={10} shadowOpacity={0.2} />
          
          {showGrid && <GridSystem width={800} height={1000} type="modular" rows={3} cols={3} />}

          {elements.map((el) => {
            if (el.type === 'panel') {
              return (
                <Group 
                  key={el.id}
                  id={el.id}
                  x={el.x}
                  y={el.y}
                  draggable
                  onClick={() => selectShape(el.id)}
                  onTap={() => selectShape(el.id)}
                  onDragEnd={(e) => handleDragEnd(e, el.id)}
                  onTransformEnd={(e) => handleTransformEnd(e, el.id)}
                  clipX={0} clipY={0} clipWidth={el.width} clipHeight={el.height}
                >
                  <Rect
                    x={0} y={0}
                    width={el.width} height={el.height}
                    fill={el.fill} stroke={selectedId === el.id ? '#3b82f6' : el.stroke} strokeWidth={selectedId === el.id ? 4 : 2}
                  />
                  <Text 
                    text={el.title || `Panel ${el.id}`} 
                    x={10} y={10} 
                    fontSize={16} fill="#333" listening={false}
                  />
                </Group>
              );
            } else if (el.type === 'balloon') {
              return (
                <SpeechBalloon
                  key={el.id}
                  id={el.id}
                  x={el.x}
                  y={el.y}
                  width={el.width}
                  height={el.height}
                  text={el.text}
                  fontSize={el.fontSize || 14}
                  isSelected={selectedId === el.id}
                  onSelect={selectShape}
                  onChange={handleChange}
                />
              );
            } else if (el.type === 'sfx') {
              return (
                <SFXText
                  key={el.id}
                  id={el.id}
                  x={el.x}
                  y={el.y}
                  width={el.width}
                  height={el.height}
                  text={el.text}
                  fontSize={el.fontSize || 60}
                  isSelected={selectedId === el.id}
                  onSelect={selectShape}
                  onChange={handleChange}
                />
              );
            }
            return null;
          })}
          
          {selectedId && (
            <Transformer
              ref={trRef}
              boundBoxFunc={(oldBox, newBox) => {
                if (newBox.width < 5 || newBox.height < 5) return oldBox;
                return newBox;
              }}
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default ComicCanvas;
