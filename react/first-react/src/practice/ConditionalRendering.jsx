function Item({ name, isPacked }) {

    return (
        <li className="item">
            {name} {isPacked && '✅'}
        </li>
    )
}

export default function ConditionalRendering() {

    return (
        <section>
            <h1>Conditional Rendering Practice</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}