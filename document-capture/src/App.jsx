import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  const options = [
 
    { label: 'Correspondence', value: 'correspondence' },
 
    { label: 'HR Employee', value: 'hr' },
 
    { label: 'Deposits', value: 'deposits' },
 
  ];
 
  const [value, setValue] = useState('correspondence');
 
  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };

  const handleSubmit = () => {
    // API LOGIC HERE (Connect to database to allow form data to be stored and retrievable)
  }
 
  return (
 <>
    <div>
      <label>
        Document Type
        <br/>
        <select value={value} onChange={handleChange} default=''>
 
          {options.map((option) => (
 
            <option value={option.value}>{option.label}</option>
 
          ))}
        </select>
      </label>
    </div>

    { value=='' && <div>  
      <p>Please select document type.</p>
    </div>}

    { value=='correspondence' && <div>
      <h3>Correspondence-Sent (public document)</h3>
      <form method="post" onSubmit={handleSubmit}>
      <label>
        Prepared By: <input name="preparedBy" defaultValue="Full Name" />
      </label>
      <hr />
      <label>
        Entry Date: <input name="entryDate" type="date" defaultValue="" />
      </label>
      <hr />
      <label>
        Document Date: <input name="documentDate" type="date" defaultValue="" />
      </label>
      <hr />
      <label>
        Email: <input name="email" type="email" defaultValue="" />
      </label>
      <hr />
      <label>
        Description: <input name="description" defaultValue="Enter a description here" />
      </label>
      <hr />
      <label>
        Document Subtype: <input name="documentSubType" defaultValue="Subtype" />
      </label>
      <hr />
      <label>
        Agency Interest: <input name="agencyInteret" defaultValue="Agency" />
      </label>
      <hr />
      <label>
        Media: <input name="media" type="file" defaultValue="" />
      </label>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
     </div>}

    { value=='hr' && <div>
      <h3>HR Employee Document (internal document)</h3>
      <form method="post" onSubmit={handleSubmit}>
      <label>
        Prepared By: <input name="preparedBy" defaultValue="Full Name" />
      </label>
      <hr />
      <label>
        Entry Date: <input name="entryDate" type="date" defaultValue="" />
      </label>
      <hr />
      <label>
        Document Date: <input name="documentDate" type="date" defaultValue="" />
      </label>
      <hr />
      <label>
        Email: <input name="email" type="email" defaultValue="" />
      </label>
      <hr />
      <label>
        Description: <input name="description" defaultValue="Enter a description here" />
      </label>
      <hr />
      <label>
        HR Employee Number: <input name="employeeNumber" type="number" defaultValue="" />
      </label>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
    </div>}

    { value=='deposits' && <div>
      <h3>Deposits (internal document)</h3>
      <form method="post" onSubmit={handleSubmit}>
      <label>
        Prepared By: <input name="preparedBy" defaultValue="Full Name" />
      </label>
      <hr />
      <label>
        Entry Date: <input name="entryDate" type="date" defaultValue="" />
      </label>
      <hr />
      <label>
        Document Date: <input name="documentDate" type="date" defaultValue="" />
      </label>
      <hr />
      <label>
        Email: <input name="email" type="email" defaultValue="" />
      </label>
      <hr />
      <label>
        Description: <input name="description" defaultValue="Enter a description here" />
      </label>
      <hr />
      <label>
        Fee Type: <input name="feeType" defaultValue="Fee Type" />
      </label>
      <hr />
      <label>
        Document Subtype: <input name="documentSubType" defaultValue="Subtype" />
      </label>
      <hr />
      <button type="reset">Reset form</button>
      <button type="submit">Submit form</button>
    </form>
    </div>}
  </>
  );
 
 };
 
 export default App;
