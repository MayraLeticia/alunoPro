import { Column } from "..";

const TextField = ({name, ...rest}) => (
    <Column>
        <label>{name}</label>
        <input type='text' {...rest} />
    </Column>
)

export default TextField;