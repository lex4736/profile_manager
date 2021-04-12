import React from "react";
import SearchBox from "./search";


function Heading({ handleSearchChange }) {
  return (
    <nav>
      <div>
        <SearchBox handleSearchChange={handleSearchChange} />
      </div>
    </nav>
  );
}
export default Heading;