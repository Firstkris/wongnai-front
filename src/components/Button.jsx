
function Button({
    name,
    icon,
    onClick,

}) {
    return (
        <>
            <button
                onClick={onClick}
                className={`rounded-lg w-full p-4 bg-blue_primary text-gray_primary font-light max-sm:text-base text-xl max-sm:h-8`}
            >
                {icon && <span>{icon}</span>}
                {name}
            </button>
        </>
    );
}

export default Button