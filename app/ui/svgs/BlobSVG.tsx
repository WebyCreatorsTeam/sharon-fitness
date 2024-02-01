export default function BlobSVG({
  width = 712.49,
  height = 681.88,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg
      viewBox='0 0 1000 801'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={`${width}mm`}
      height={`${height}mm`}
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M538.595 -94.8489C415.665 -96.2722 296.458 -74.7554 196.855 -12.5321C97.858 49.312 14.4242 135.924 1.29872 240.805C-11.2962 341.445 70.6468 423.884 131.404 510.455C200.495 608.9 247.504 728.975 372.318 769.453C516.068 816.073 695.313 816.462 813.302 731.601C927.729 649.301 897.618 499.584 923.57 372.977C950.026 243.912 1051.94 103.195 964.013 -3.64979C876.045 -110.549 690.478 -93.0904 538.595 -94.8489Z'
        fill='url(#paint0_linear_92_39)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_92_39'
          x1='7.50001'
          y1='330'
          x2='1299.26'
          y2='229.483'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#F39090' stop-opacity='0' />
          <stop offset='0.605' stop-color='#704C8C' stop-opacity='0.29' />
        </linearGradient>
      </defs>
    </svg>
  );
}
