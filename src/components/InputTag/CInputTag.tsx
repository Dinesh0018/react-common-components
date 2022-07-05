import React from "react";
// import { COUNTRIES } from "./countries";
// import "./InputTag.scss";
import { WithContext as ReactTags } from "react-tag-input";

const suggestions = [{ id: 123, text: "test" }].map((country) => {
  return {
    id: country,
    text: country
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function InputTag() {
  const [tags, setTags] = React.useState([{"id":"Thailand","text":"Thailand"},{"id":"India","text":"India"},{"id":"Vietnam","text":"Vietnam"},{"id":"Turkey","text":"Turkey"}]);

  const handleDelete = (i:number) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag:any) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag:any, currPos:any, newPos:any) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index:any) => {
    console.log("The tag at index " + index + " was clicked");
  };

  const onClearAll = () => {
    setTags([]);
  };

  return (
    <div className="app">
      <h4> React Tags Example </h4>
      <div>
        <ReactTags
          tags={tags}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          // onClearAll={onClearAll}
          inputFieldPosition="bottom"
          autocomplete
          minQueryLength={2}
          maxLength={5}
          autofocus={false}
          allowDeleteFromEmptyInput={true}
          readOnly={false}
          allowUnique={true}
          allowDragDrop={true}
          inline={true}
          allowAdditionFromPaste={true}
          // editable={true}
          // clearAll={true}
        />
      </div>
    </div>
  );
}
