import React from 'react';
import { Group, Text } from 'react-konva';

const SFXText = ({ id, x, y, width, height, text, fontSize = 60, isSelected, onSelect, onChange }) => {
  return (
    <Group
      x={x}
      y={y}
      draggable
      onClick={() => onSelect(id)}
      onTap={() => onSelect(id)}
      onDragEnd={(e) => {
        onChange(id, { x: e.target.x(), y: e.target.y() });
      }}
      onTransformEnd={(e) => {
        const node = e.target;
        const scaleX = node.scaleX();
        const scaleY = node.scaleY();
        node.scaleX(1);
        node.scaleY(1);
        onChange(id, {
          x: node.x(),
          y: node.y(),
          width: Math.max(10, node.width() * scaleX),
          height: Math.max(10, node.height() * scaleY),
        });
      }}
    >
      <Text
        text={text}
        width={width}
        height={height}
        align="center"
        verticalAlign="middle"
        fontSize={fontSize}
        fontStyle="bold italic"
        fill="#ef4444" // vibrant red
        stroke="#ffffff"
        strokeWidth={4}
        shadowColor="black"
        shadowBlur={10}
        shadowOffsetX={5}
        shadowOffsetY={5}
        fontFamily="Impact, sans-serif"
        listening={true}
      />
      {/* Highlighting border if selected */}
      {isSelected && (
        <Text
          text={text}
          width={width}
          height={height}
          align="center"
          verticalAlign="middle"
          fontSize={fontSize}
          fontStyle="bold italic"
          stroke="#3b82f6"
          strokeWidth={6}
          fontFamily="Impact, sans-serif"
          listening={false}
        />
      )}
    </Group>
  );
};

export default SFXText;
