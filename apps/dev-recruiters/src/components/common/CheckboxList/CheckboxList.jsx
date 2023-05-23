import React, { useRef, useState } from 'react';
import Checkbox from '../Checkbox/CheckBox';
import { List, ListItem } from './StyledCheckboxList';


export default function CheckboxList({
  title,
  items,
  keyProperty,
  valueProperty,
  selectedItems = [],
  onChange,
}) {
  const [addedItems, setAddedItems] = useState([]);

  const handleOnSelectItem = (value) => {
    let items = [...addedItems];
    var item = keyProperty
      ? valueProperty
        ? value[valueProperty]
        : value[keyProperty]
      : value;
    if (items.includes(item)) {
      items = items.filter((i) => i !== item);
    } else {
      items = [...items, item];
    }
    setAddedItems(items);
    onChange(items);
  };

  const isChecked = (value) => {
    const item = keyProperty
      ? valueProperty
        ? value[valueProperty]
        : value[keyProperty]
      : value;

    return selectedItems
      ? selectedItems.some((i) => i === item)
      : addedItems.some((i) => i === item);
  };
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} value={item} checked={isChecked(item)}>
          <Checkbox
            label={keyProperty ? item[keyProperty] : item}
            id={`${title}${item}${index}`}
            checked={isChecked(item)}
            onChange={() => handleOnSelectItem(item)}
          />
        </ListItem>
      ))}
    </List>
  );
}
