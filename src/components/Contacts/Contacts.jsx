import { Item, DeleteContact } from "./Contacts.styled";


export const Contacts = ({ contacts, filter, del }) => { 
    

    return (
        <ul>
            {(filter) ?
                contacts.filter(
                    ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
                ).map(
                    ({ id, name, number }) =>
                        <Item key={id}>
                            {name}: {number}
                            <DeleteContact type="button" onClick={()=>{del(id)}}>Delete</DeleteContact>
                        </Item>
                ):
                contacts.map(({ id, name, number }) => 
                    <Item key={id}>
                        {name}: {number}
                        <DeleteContact type="button" onClick={()=>{del(id)}}>Delete</DeleteContact>
                    </Item>
                )
            }
        </ul>
    )
}