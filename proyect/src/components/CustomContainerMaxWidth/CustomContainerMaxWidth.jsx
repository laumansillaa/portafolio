export const CustomContainerMaxWidth = ({ children }) => {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", maxWidth: "1440px"}}>
            {children}
        </div>
    );
}