import React from 'react';
import Cat from './Cat';

const CatList = (props) => {
    //console.log(props);
    const allCats = props.list_o_cats;

    let catComponents = []
    for(let index = 0 ;index < allCats.length; index++){
        let catData = allCats[index];
        catComponents.push(<Cat name={catData.name} link={catData.link} />);
    }

    //console.log(props);
    return(
        <div>
            <h1>All My Cats</h1>
            {catComponents}
        </div>
    );
};

export default CatList;