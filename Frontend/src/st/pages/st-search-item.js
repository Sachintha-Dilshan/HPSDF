import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Table, TableBody } from "flowbite-react";
import STCollapseBar from "../components/ar-file-collapse-bar";
import ARhomecard from "../components/st-home-card";
import ItemService from "../services/st-item-service";
import CategoryService from "../services/st-category-service";

function STSearchItems(){
  
  const [items,setItems]=useState([]);
  const [categories,setCategories]=React.useState([]);
  
  const fetchCategories=()=>{
    CategoryService.getAllCategories()
    .then((response)=>{
      setCategories(response.data);
        console.log(response.data);
        console.log("successfully fetch data to the store(getSectionById)");
        console.log(categories);
    })
    .catch((e)=>{
        console.log("error when fetching data to the ar-add-files(getSectionById)");
        console.log(e);
    })
}

  const fetchItems=()=>{
    ItemService.getAllItems()
    .then((response)=>{
      console.log("successfully fetched store items");
      setItems(response.data);
      console.log(response.data);   
    })
    .catch((e)=>{
      console.log("error fetching store items");
      console.log(e);
    })
  }
  React.useEffect(()=>{
    fetchItems();
    fetchCategories();
  },[])  

  const groupItemsByCategory = () => {
    const groupedItems = {};
    items.forEach(item => {
      if (!groupedItems[item.itemCategory]) {
        groupedItems[item.itemCategory] = [];
      }
      groupedItems[item.itemCategory].push(item);
    });
    return groupedItems;
  };
  const countItemsWithLowQuantity = () => {
    return items.filter(item => item.quantity < 10).length;
  };

  const renderTables = () => {
    const groupedItems = groupItemsByCategory();
    // Object.keys(groupedItems)
    return categories.map(category => (
      <div key={category.id} className="overflow-auto m-36">
        <h1 className="mb-5"> {category.categoryName}</h1>
        <Table className="striped hoverable">
          <Table.Head>
            
              <Table.HeadCell>Item Name</Table.HeadCell>
              <Table.HeadCell>Item Category</Table.HeadCell>
              <Table.HeadCell>Quantity</Table.HeadCell>
        
          </Table.Head>
          <TableBody>
            {groupedItems[category.id]?.map(item => (
              <Table.Row key={item.id} className={item.quantity < 10 ? 'bg-red-200' : ''}>
                <Table.Cell>{item.itemName}</Table.Cell>
                <Table.Cell>{category.categoryName}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
              </Table.Row>
            ))}
          </TableBody>
        </Table>
      </div>
    ));
  };




    // Render tables for each item category
    // const renderTables2 = () => {
    //   return categories.map(category => (
    //     <div key={category.id} className="overflow-auto m-36">
    //       <h1 className="mb-5">Category Name: {category.categoryName}</h1>
    //       <table className="table">
    //         <thead>
    //           <tr>
    //             <th>Item Name</th>
    //             <th>Item Category</th>
    //             <th>Quantity</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {items.map(item => {
    //             if (item.itemCategory === category.id) {
    //               return (
    //                 <tr key={item.id}>
    //                   <td>
    //                     {/* Wrap each row in a Link component with a dynamic URL */}
    //                     <Link to={`/checkInOutItems/${item.id}`}>{item.itemName}</Link>
    //                   </td>
    //                   <td>{category.categoryName}</td>
    //                   <td>{item.quantity}</td>
    //                 </tr>
    //               );
    //             }
    //             return null;
    //           })}
    //         </tbody>
    //       </table>
    //     </div>
    //   ));
    // };



    // const handleRowClick = (item) => {
    //   // Navigate to the checkInOutItems page and pass the item object as state
    //   history.push({
    //     pathname: '/checkInOutItems',
    //     state: { item: item }
    //   });
    // };
  //   const renderTables3 = () => {
  //     const groupedItems = groupItemsByCategory();
  //     return categories.map(category => (
  //       <div key={category.id} className="overflow-auto m-36">
  //         <h1 className="mb-5">Category Name: {category.categoryName}</h1>
  //         <Table className="table">
  //         <Table.Head>
            
  //                    <Table.HeadCell>Item Name</Table.HeadCell>
  //                    <Table.HeadCell>Item Category</Table.HeadCell>
  //                    <Table.HeadCell>Quantity</Table.HeadCell>
                  
  //          </Table.Head>
  //           <Table.Body>
  //           {groupedItems[category.id]?.map(item => (
  //           <Link
  //             key={item.id}
  //             to={{
  //               pathname: '/ST/checkInOutItems',
  //               state: { item: item }
  //             }}
  //             style={{ textDecoration: 'none', color: 'inherit' }}
  //           >
  //             <Table.Row>
  //               <Table.Cell>{item.itemName}</Table.Cell>
  // //               <Table.Cell>{category.categoryName}</Table.Cell>
  // //               <Table.Cell>{item.quantity}</Table.Cell>
  //             </Table.Row>
  //           </Link>
  //         ))}
  //           </Table.Body>
  //         </Table>
  //       </div>
  //     ));
  //   };
    return(
        <main>
          <STCollapseBar/>
          <h3 className="text-center text-lg text-slate-500 font-semibold border-b-2 border-b-slate-200 uppercase">
                STORE
             </h3>
          <div className="grid  lg:grid-cols-3 md:grid-cols-1 m-36 gap-8">
             <ARhomecard count={countItemsWithLowQuantity()}/>
             
             
          </div>
          {renderTables()}

         
       
      </main>
    );
}

export default STSearchItems