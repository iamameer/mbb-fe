interface ButtonProps {
  text?: string;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
}

const Button = ({
  text = 'button',
  bgColor = 'bg-blue-500', 
  textColor = 'text-white', 
  hoverColor = 'bg-blue-600'
}: ButtonProps) => {
  return (
    <button className={`${bgColor} ${textColor} font-bold py-2 px-4 rounded shadow hover:${hoverColor}`}>
      {text}
    </button>
  );
};

export default Button