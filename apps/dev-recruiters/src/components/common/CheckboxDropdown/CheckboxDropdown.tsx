import AppDropDown from '../AppDropDown';
import CheckboxList from '../CheckboxList';

/**
 * Takes an array of object/string and return selected items
 * @param title the dropdown list label
 * @param items  array string/object  (object => must provide nameProperty, valueProperty is optional)
 * @param keyProperty  the value to display as checkbox label
 * @param valueProperty  the return value of checkbox
 * Ex {prop1, prop2, prop3} => (key=prop1, value= prop3) => {prop1, prop3}
 * @param onChange return an array of checked items
 * @returns (key, value) => Value , (ket, !value) => key, (!key,!value) => item
 */

interface Props<T> {
  id?: any;
  title: string;
  keyProperty?: any | undefined;
  valueProperty?: any | undefined;
  items: any[];
  selectedItems?: T[];
  onChange: (value: any) => void;
}

export default function CheckboxDropdown<T>({
  title,
  items,
  keyProperty,
  valueProperty,
  selectedItems,
  onChange,
}: Props<T>) {
  return (
    <AppDropDown title={title}>
      <CheckboxList
        title={title}
        items={items}
        keyProperty={keyProperty}
        valueProperty={valueProperty}
        onChange={onChange}
        selectedItems={selectedItems}
      />
    </AppDropDown>
  );
}
