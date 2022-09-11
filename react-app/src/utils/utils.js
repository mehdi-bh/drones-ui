const formatMenuItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

export {
    formatMenuItem,
}