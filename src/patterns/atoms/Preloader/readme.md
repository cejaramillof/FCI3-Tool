**Atoms**

# Preloader


Use Preloader for Show/Hide loader animation.


```jsx 
import Preloader from 'patterns/atoms/Preloader';

  <Preloader>
    elements you want to hide if is loading
  </Preloader>
```

Uses ```isLoading``` to toggle visibility of animation loader
Params:

| props             | Type        |                                        |          |
| ----------------- |:-----------:| :--------------------------------------| :--------|
| children          | Component   | Component to render if not laoding     | Optional |
| isLoading         | Boolean     | Toggle show/hide preloader animation   | Optional |
| type              | String      | Type of animation                      | Optional |

```jsx 
import Preloader from 'patterns/atoms/Preloader';

  <Preloader isLoading={true}>
    elements are hidden until isLoading is set to true
  </Preloader>
```