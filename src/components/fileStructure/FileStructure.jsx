import React, { useState } from "react";

function FileStructure({ explore }) {
  const [expand, setExpand] = useState(false);
  return (
    <div>
      {explore.isFolder ? (
        <div>
          <span onClick={() => setExpand(!expand)}>{explore.name}</span>
          {
            <div style={{display : expand ? "block" : "none", paddingLeft:"30px"} }>
              {explore?.files?.map((item) => {
                return <FileStructure explore={item} />;
              })}
            </div>
          }
        </div>
      ) : (
        explore.name
      )}
    </div>
  );
}

export default FileStructure;
