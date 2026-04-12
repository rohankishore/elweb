import './MarqueeLinks.css';

const marqueeLinks = [
  { label: 'Events', url: '#' },
  { label: 'Gallery', url: '#' },
  { label: 'Resources', url: '#' },
  { label: 'Grievance', url: '#' },
  { label: 'Clubs', url: '#' },
  { label: 'Achievements', url: '#' },
  { label: 'Contact', url: '#' },
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
