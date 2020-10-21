**Molecule**

# Input Range


Use Input range for actions in forms, dialogs


```jsx 
import InputRange from 'patterns/molecules/InputRange';

const onChange = e => console.log("Element selected", e);
const ranges = ['Range 1', 'Range 2', 'Range 3', 'Range 4', 'Range 5'];

<InputRange
    id="id-element"
    labelText={i18n(`Label title`)}
    tags={ranges}
    defaultValue={this.state.rangeValue}
    valueRange={(e) => { onChange(e) }}>
</InputRange>

```

