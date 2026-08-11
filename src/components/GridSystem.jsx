import React from 'react';
import { Line, Group } from 'react-konva';

const GridSystem = ({ width, height, type = 'modular', rows = 3, cols = 3, gutter = 20, margin = 40 }) => {
  const lines = [];
  
  if (type === 'modular' || type === 'column') {
    const innerWidth = width - margin * 2;
    const innerHeight = height - margin * 2;
    const colWidth = (innerWidth - gutter * (cols - 1)) / cols;
    const rowHeight = (innerHeight - gutter * (rows - 1)) / rows;

    // Draw Column Guides
    for (let i = 0; i <= cols; i++) {
      const x = margin + i * (colWidth + gutter);
      // Left edge of column
      lines.push(<Line key={`c-l-${i}`} points={[x, margin, x, height - margin]} stroke="#3b82f6" strokeWidth={1} dash={[5, 5]} opacity={0.5} listening={false} />);
      // Right edge of column (if not last)
      if (i < cols) {
        lines.push(<Line key={`c-r-${i}`} points={[x + colWidth, margin, x + colWidth, height - margin]} stroke="#3b82f6" strokeWidth={1} dash={[5, 5]} opacity={0.5} listening={false} />);
      }
    }

    // Draw Row Guides (if modular)
    if (type === 'modular') {
      for (let i = 0; i <= rows; i++) {
        const y = margin + i * (rowHeight + gutter);
        // Top edge of row
        lines.push(<Line key={`r-t-${i}`} points={[margin, y, width - margin, y]} stroke="#3b82f6" strokeWidth={1} dash={[5, 5]} opacity={0.5} listening={false} />);
        // Bottom edge of row (if not last)
        if (i < rows) {
          lines.push(<Line key={`r-b-${i}`} points={[margin, y + rowHeight, width - margin, y + rowHeight]} stroke="#3b82f6" strokeWidth={1} dash={[5, 5]} opacity={0.5} listening={false} />);
        }
      }
    }
  }

  return (
    <Group>
      {lines}
    </Group>
  );
};

export default GridSystem;
