const Button = ({ children, bg = 'bg-black', text = 'text-white', w = 'full', shadow = 'shadow-md', leftIcon = null, rightIcon = null, icon = null, py = 'py-2', px = 'px-8' }) => {
  return (
    <button className={`${bg} ${text} ${w} ${px} ${py} ${shadow} transition-all hover:opacity-80 hover:font-bold font-Noto font-normal text-base rounded-lg flex items-center justify-center`}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children} {icon}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
