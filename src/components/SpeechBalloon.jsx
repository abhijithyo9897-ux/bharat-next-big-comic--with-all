import React from 'react';
import { Group, Ellipse, Text, Path } from 'react-konva';

const SpeechBalloon = ({ id, x, y, width, height, text, fontSize = 14, isSelected, onSelect, onChange }) => {
  // A simple rounded balloon shape. In a real app, we'd add tail controls here.
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
          width: Math.max(20, node.width() * scaleX),
          height: Math.max(20, node.height() * scaleY),
        });
      }}
    >
      {/* Balloon Tail (Simplified) */}
      <Path
        data={`M ${width / 2} ${height} L ${width / 2 - 20} ${height + 40} L ${width / 2 + 20} ${height} Z`}
        fill="#ffffff"
        stroke={isSelected ? "#3b82f6" : "black"}
        strokeWidth={isSelected ? 3 : 2}
      />
      {/* Main Balloon Body */}
      <Ellipse
        x={width / 2}
        y={height / 2}
        radiusX={width / 2}
        radiusY={height / 2}
        fill="#ffffff"
        stroke={isSelected ? "#3b82f6" : "black"}
        strokeWidth={isSelected ? 3 : 2}
      />
      <Text
        text={text}
        x={20}
        y={20}
        width={width - 40}
        height={height - 40}
        align="center"
        verticalAlign="middle"
        fontSize={fontSize}
        fill="black"
        fontFamily="comic sans ms, sans-serif"
        listening={false}
      />
    </Group>
  );
};

export default SpeechBalloon;
