import './styles.css';

export const LayoutComponents = (props) => {
    return (
        <div className="container">
            <div className="container-pages">
                <div className="wrap-pages">
                    {props.children}
                </div>
            </div>
        </div>

    );
}