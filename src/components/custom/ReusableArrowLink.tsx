import { FaGreaterThan } from 'react-icons/fa';

const ReusableArrowLink = ({
  link,
  text = 'Read More',
}: {
  link: string;
  text: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="transition-all duration-200 flex gap-2 items-center text-[var(--promoblock-text-heading)] linkHover"
      style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}
    >
      <FaGreaterThan className="h-3 transition-all duration-200 text-[var(--link-hover-color)]" />
      {text}
    </a>
  );
};

export default ReusableArrowLink;
