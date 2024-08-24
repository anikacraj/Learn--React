# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



    const todos = [
        {
            id: '1',
            header: "Green Card",
            title: "This is a green card"
            
        },
        {
            id: '2',
            header: "Blue Card",
            title: "This is a blue card"

        },
        {
            id: '3',
            header: "Orange Card",
            title: "This is an orange card"
        },
        {
            id: '3',
            header: "skyBlue Card",
            title: "This is an orange card"
        }
    ];
    const details = [
        {
            name: "Anik",
            age: 21,
            phones: [{ home: "019329372" }, { office: "018239302" }]
        },
        {
            name: "Anik chy",
            age: 21,
            phones: [{ home: "019329372" }, { office: "0182930" }]
        }
    ];





       <Header />
            <h1 className='header'>Welcome to our App</h1>
            <div className='cardDesign'>
                {data.map((item, index) => (
                    <Card key={index} header={item.header} title={item.title} />
                ))}
                <Card />
            </div>
            <p>Thank you for visiting!</p>
            <List todos={todos} />
    
            <h2> Nested mapping :</h2>
            <div>
                {details.map((detail, index) => (
                    <article key={index}>
                        <h3>FullName: {detail.name}</h3>
                        <h3>Age: {detail.age}</h3>
                        {detail.phones.map((phone, phoneIndex) => (
                            <p key={phoneIndex}>
                                Home Phone Number: {phone.home} <br />
                                Office Phone Number: {phone.office}
                            </p>
                        ))}
                    </article>
                ))}
            </div>