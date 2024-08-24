import React from 'react';
import './App.css'; // Import your CSS file
import Card from './Components/Card.jsx';
import Header from './Components/Menubar.jsx';
import data from './data.json';
import UniqueList from './Components/unique/uniqueList.jsx'
import ClassComponent from './Components/ClassComponent.jsx';
import State from './Components/State.jsx';
import Onchange from './Components/Event_Handeling/Onchange.jsx';
import  Index from './Components/Conditional_Rendaring/Index.jsx';
import Index2 from './Components/Hook_state/Index2.jsx';
import Form from './Components/Form.jsx';
import Toggle from './Components/Toggle.jsx';
import FAQs from './Components/Project_2_FAQS/FAQs.jsx';
import FAQ from './Components/Project_2_FAQS/FAQ.jsx';
import UseEffect from './Components/UseEffect.jsx';
import UseFetch from './Components/UseFetch.jsx';
import Toastify from './Components/Toastify.jsx';


const App = () => {
  
 
    
    return (
      
       

        <div>


 <Header />
     {data.map((item,index)=><Card key={index} title={item.title} 
    name={item.name} />)} 

<FAQs />
<FAQ />
<Toastify />

<UseEffect />
{/* <UseFetch /> */}
    <Form />

    <Toggle />
           
         {/* <UniqueList />

      <ClassComponent name={"Anik"} age={23} /> */}
<Onchange />
<Index2 />
      <State />

  <Index />

        </div>
    );
}
    export default App;
    