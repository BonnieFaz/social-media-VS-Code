interface IInputIconPlaceholder{
    type: string;
    name: string;
    id: string;
    placeholder: string;

}



const IInputIconPlaceholder = ({type, name, id, placeholder, }: IInputIconPlaceholder) => {
    return (
        <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
      />
    );
};

export default IInputIconPlaceholder;