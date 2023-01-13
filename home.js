window.addEventListener('DOMContentLoaded',(even) => {
    createInnerHtml();
    });
    const createInnerHtml=() =>{
        const innerHtml=`
        <tr>
            <th>Full Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
            <th>Phone Number</th>
        </tr>
        <tr>
                <td>Sneha Pal</td>
                <td>Belgharia</td>
                <td>Kolkata</td>
                <td>West Bengal</td>
                <td>700056</td>
                <td>+919674783976</td>
                <td>
                <img id="1" onclick="remove(this)" alt="delete" src="Images/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit" src="Images/create-black-18dp.svg">
            </td>
        </tr>
        `;
        document.querySelector('#display').innerHTML=innerHtml;
    } 