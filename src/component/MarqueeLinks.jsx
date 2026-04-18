import './MarqueeLinks.css';

const marqueeLinks = [
  { label: 'Always with you', url: '#' },
  { label: 'Dream big, act bigger', url: '#' },
  { label: 'Stay curious, stay inspired', url: '#' },
  { label: 'Every day is a new beginning', url: '#' },
  { label: 'Together we rise', url: '#' },
  { label: 'Innovation starts here', url: '#' },
  { label: 'Shine your light', url: '#' },
  { label: 'Forward, always', url: '#' },
  { label: 'Create. Inspire. Repeat.', url: '#' },
];

export default function MarqueeLinks() {
  return (
    <div className="marquee-outer">
      <div className="marquee-inner">
        <div className="marquee-track">
          {marqueeLinks.concat(marqueeLinks).map((item, idx) => (
            <a
              className="marquee-link"
              href={item.url}
              key={idx}
              tabIndex={0}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
