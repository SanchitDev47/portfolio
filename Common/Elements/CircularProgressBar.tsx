import { Box } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Icon from "@mui/material/Icon"
import * as Icons from '@mui/icons-material';



const CircularProgressBar = ({ percentage, icon }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const radius = canvas.width / 2.3;
    const lineWidth = 10;
    const startAngle = Math.PI * 1.5;
    const endAngle = Math.PI * 1.5 + (percentage / 100) * (Math.PI * 2);
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    let currentAngle = startAngle;


    const animate = () => {
      if (currentAngle < endAngle) {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background circle
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2, false);
        context.fillStyle = 'white';
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowBlur = 12;
        context.shadowColor = 'rgba(0, 0, 0, 0.3)';
        context.fill();

        // Draw progress circle
        context.beginPath();
        context.arc(x, y, radius, startAngle, currentAngle, false);
        context.lineWidth = lineWidth;
        context.strokeStyle = '#20C5FA';
        context.strokeShadow = 'rgba(0, 0, 0, 0.0)';
        context.stroke()

        // if (!IconComponent) {
        //   return null;
        // }

        // //Icon svg of canvas
        // context.beginPath();
        // context.drawImage(canvasIcon, 0, 0)

        // context.fill()


        currentAngle += 0.03; // Adjust the animation speed here
        requestAnimationFrame(animate);
      }
    };
    animate();
  }, [percentage]);

  return (
    // <>
    //   <Box sx={{ mt: '10%', display: 'flex', justifyContent: 'space-evenly' }}>
    //     <canvas ref={canvasRef} width={150} height={150} />
    //     <IconComponent fontSize={size} style={{ color }} />
    //   </Box>
    // </>
    <>
      <div style={{ position: 'relative', flexWrap:'wrap', justifyContent:'space-around' }}>
          <canvas ref={canvasRef} width={180} height={180} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <Icon sx={{ display: 'inline', height: '20', width: '20' }}>{icon}</Icon>
        </div>
      </div>
    </>
  )
};

export default CircularProgressBar;
