import { useState } from "react"


const useMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return { isOpen, toggleMenu };
};

export default useMenu;