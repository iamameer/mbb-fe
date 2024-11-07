interface ButtonProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

const Button = ({
  text = 'button',
  bgColor = 'bg-blue-500', 
  textColor = 'text-white', 
  hoverColor = 'bg-blue-600',
  onClick
}: ButtonProps) => {
  return (
    <button className={`font-bold py-2 px-4 rounded shadow 
      ${bgColor} ${textColor} hover:${hoverColor}`} 
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button