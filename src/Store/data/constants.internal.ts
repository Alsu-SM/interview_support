import { IDataSlice, ITheme } from './types';

const frontendData: IDataSlice = {
	themes: [
		{
			id: 'theme-1',
			name: 'JavaScript Basics',
			description:
				'Fundamental concepts of JavaScript programming language'.repeat(5),
			questions: [],
		},
		{
			id: 'theme-2',
			name: 'React Core Concepts',
			description: 'Main principles and hooks in React library',
			questions: [],
		},
		{
			id: 'theme-3',
			name: 'TypeScript for React',
			description: 'Using TypeScript with React applications',
			questions: [],
		},
		{
			id: 'theme-4',
			name: 'CSS and Styling',
			description: 'Modern CSS techniques and styling approaches',
			questions: [],
		},
		{
			id: 'theme-5',
			name: 'State Management',
			description: 'Managing application state in frontend apps',
			questions: [],
		},
		{
			id: 'theme-6',
			name: 'Performance Optimization',
			description: 'Techniques to improve frontend performance',
			questions: [],
		},
		{
			id: 'theme-7',
			name: 'Testing Frontend',
			description: 'Testing approaches for JavaScript applications',
			questions: [],
		},
		{
			id: 'theme-8',
			name: 'Build Tools',
			description: 'Modern JavaScript build tools and bundlers',
			questions: [],
		},
		{
			id: 'theme-9',
			name: 'Browser APIs',
			description: 'Working with browser APIs and Web APIs',
			questions: [],
		},
	],
	questions: [
		// Theme 1: JavaScript Basics
		{
			id: 'q-1-1',
			themeId: 'theme-1',
			question:
				'What is the difference between let, const and var in JavaScript?',
			answer:
				'The main differences are:\n1. var is function-scoped, while let and const are block-scoped.\n2. var declarations are hoisted to the top of their scope, let and const are not hoisted.\n3. var can be redeclared in the same scope, let cannot be redeclared but can be reassigned.\n4. const cannot be redeclared or reassigned, and must be initialized during declaration.\n5. var creates a property on the global window object (in browsers), let and const do not.',
			isLearnt: true,
			tags: ['variables', 'scope', 'hoisting'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-1-2',
			themeId: 'theme-1',
			question: 'Explain the concept of closures in JavaScript',
			answer:
				"A closure is a function that has access to its own scope, the outer function's variables, and global variables, even after the outer function has returned. Closures are created every time a function is created. They are useful for:\n1. Data privacy/encapsulation\n2. Partial applications and currying\n3. Event handlers and callbacks\n4. Maintaining state in async operations\n\nExample:\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\ncounter(); // 1\ncounter(); // 2",
			isLearnt: false,
			tags: ['closures', 'functions', 'scope'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-1-3',
			themeId: 'theme-1',
			question: 'What is the event loop in JavaScript?',
			answer:
				'The event loop is what allows JavaScript to be non-blocking and asynchronous despite being single-threaded. It works as follows:\n1. The call stack executes synchronous code\n2. Web APIs handle async operations (setTimeout, fetch etc.)\n3. The callback queue holds callbacks from completed async operations\n4. The event loop constantly checks if the call stack is empty\n5. When the stack is empty, it moves callbacks from the queue to the stack\n\nThis mechanism enables features like promises and async/await. The event loop gives priority to microtasks (promises, mutation observer) over macrotasks (setTimeout, setInterval).',
			isLearnt: true,
			tags: ['async', 'event-loop', 'promises'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-1-4',
			themeId: 'theme-1',
			question: 'Explain prototypal inheritance in JavaScript',
			answer:
				"JavaScript uses prototypal inheritance where objects can inherit properties from other objects (prototypes). Key points:\n1. Every object has a [[Prototype]] property pointing to another object\n2. When accessing a property, JS looks up the prototype chain until found\n3. The Object.create() method creates a new object with the specified prototype\n4. Constructor functions have a .prototype property used when creating objects with 'new'\n5. ES6 classes are syntactic sugar over prototypal inheritance\n\nUnlike classical inheritance, there are no classes (prior to ES6) - objects inherit directly from other objects.",
			isLearnt: false,
			tags: ['OOP', 'prototypes', 'inheritance'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-1-5',
			themeId: 'theme-1',
			question: 'What are the differences between == and === in JavaScript?',
			answer:
				"The main differences are:\n\n== (loose equality):\n1. Performs type coercion if types are different\n2. Compares values after conversion\n3. Can lead to unexpected results (e.g., '' == false is true)\n4. Faster but less predictable\n\n=== (strict equality):\n1. No type coercion - different types always return false\n2. Compares both value and type\n3. More predictable behavior\n4. Generally recommended to use\n\nExamples:\n'5' == 5 // true\n'5' === 5 // false\nnull == undefined // true\nnull === undefined // false",
			isLearnt: true,
			tags: ['operators', 'comparison', 'type-coercion'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-1-6',
			themeId: 'theme-1',
			question: 'What is hoisting in JavaScript?',
			answer:
				"Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation. Key points:\n1. var declarations are hoisted (initialized as undefined)\n2. let and const declarations are hoisted but not initialized (Temporal Dead Zone)\n3. Function declarations are fully hoisted (can be called before declaration)\n4. Function expressions follow variable hoisting rules\n5. Class declarations are hoisted but not initialized\n\nExample:\nconsole.log(x); // undefined (var x is hoisted)\nvar x = 5;\n\nconsole.log(y); // ReferenceError (let y is in TDZ)\nlet y = 10;",
			isLearnt: false,
			tags: ['hoisting', 'variables', 'scope'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 2: React Core Concepts
		{
			id: 'q-2-1',
			themeId: 'theme-2',
			question:
				'What are the key differences between class components and functional components with hooks?',
			answer:
				"Main differences:\n\nClass Components:\n1. Use ES6 class syntax\n2. Have lifecycle methods (componentDidMount, etc.)\n3. Use this.state and this.setState\n4. Can use error boundaries\n5. More boilerplate code\n\nFunctional Components with Hooks:\n1. Simpler function syntax\n2. Use useState, useEffect etc. for state and side effects\n3. No 'this' binding issues\n4. Easier to reuse stateful logic with custom hooks\n5. Generally preferred in modern React\n\nReact team recommends using functional components for new code. Hooks cover all use cases of class components except error boundaries.",
			isLearnt: false,
			tags: ['components', 'hooks', 'state'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-2-2',
			themeId: 'theme-2',
			question: 'Explain the Virtual DOM in React',
			answer:
				"The Virtual DOM is a lightweight copy of the actual DOM that React uses for performance optimization. How it works:\n1. React creates a virtual representation of the UI in memory\n2. When state changes, React creates a new Virtual DOM tree\n3. React compares (diffs) the new tree with the previous one (reconciliation)\n4. React calculates the minimal set of changes needed\n5. These changes are batched and applied to the real DOM\n\nBenefits:\n1. Avoids expensive direct DOM manipulation\n2. Batched updates improve performance\n3. Abstracts away browser differences\n4. Enables server-side rendering\n\nThe Virtual DOM isn't faster than direct DOM manipulation - it's the diffing algorithm that provides efficiency.",
			isLearnt: true,
			tags: ['virtual-dom', 'performance', 'reconciliation'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-2-3',
			themeId: 'theme-2',
			question:
				'What are React hooks and what are the main rules for using them?',
			answer:
				"Hooks are functions that let you 'hook into' React state and lifecycle features from function components. Main hooks:\n1. useState - for state management\n2. useEffect - for side effects\n3. useContext - for context API\n4. useReducer - for complex state logic\n5. useRef - for mutable ref objects\n\nRules of Hooks:\n1. Only call hooks at the top level (not in loops, conditions, or nested functions)\n2. Only call hooks from React function components or custom hooks\n3. Hooks should be called in the same order each render\n\nThese rules ensure that React can properly preserve the state of hooks between multiple useState and useEffect calls.",
			isLearnt: false,
			tags: ['hooks', 'state', 'effects'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-2-4',
			themeId: 'theme-2',
			question: 'What is JSX and how does it differ from HTML?',
			answer:
				'JSX is a syntax extension for JavaScript that allows writing HTML-like code in React. Differences from HTML:\n1. JSX is transpiled to JavaScript (React.createElement calls)\n2. Attribute names are camelCased (className instead of class)\n3. Self-closing tags are required (<div />)\n4. JavaScript expressions can be embedded with {}\n5. Inline styles are objects with camelCased properties\n6. Event handlers are functions rather than strings\n\nJSX is optional in React but recommended as it provides:\n1. More readable component code\n2. Visual structure similar to the output\n3. Better developer experience\n\nUnder the hood, JSX is transformed into plain JavaScript that describes the UI structure.',
			isLearnt: false,
			tags: ['jsx', 'syntax', 'components'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-2-5',
			themeId: 'theme-2',
			question: "Explain React's component lifecycle methods",
			answer:
				'Class components have several lifecycle methods (functional components use useEffect hook instead):\n\nMounting:\n1. constructor() - Initializes state and binds methods\n2. static getDerivedStateFromProps() - Rarely used\n3. render() - Returns JSX\n4. componentDidMount() - After first render (good for API calls)\n\nUpdating:\n1. static getDerivedStateFromProps()\n2. shouldComponentUpdate() - For performance optimization\n3. render()\n4. getSnapshotBeforeUpdate() - Rarely used\n5. componentDidUpdate() - After updates (good for DOM operations)\n\nUnmounting:\n1. componentWillUnmount() - Cleanup (timers, subscriptions)\n\nError Handling:\n1. static getDerivedStateFromError()\n2. componentDidCatch()',
			isLearnt: false,
			tags: ['lifecycle', 'class-components', 'hooks'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-2-6',
			themeId: 'theme-2',
			question: 'What is the purpose of the key prop in React lists?',
			answer:
				"The key prop helps React identify which items have changed, been added, or removed in a list. Key points:\n1. Keys should be unique among siblings (don't use indexes if possible)\n2. They help React efficiently update and reorder components\n3. Without keys, React may re-render entire lists unnecessarily\n4. Keys should be stable (not change between renders)\n5. Keys are not passed as props to components\n\nGood keys:\n- Unique IDs from your data\n- Stable, predictable values\n\nBad keys:\n- Array indexes (can cause issues if items reorder)\n- Random values (change between renders)\n\nProper use of keys improves performance and prevents bugs in list rendering.",
			isLearnt: false,
			tags: ['lists', 'performance', 'reconciliation'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-2-7',
			themeId: 'theme-2',
			question: 'What are React Fragments and when should they be used?',
			answer:
				"React Fragments let you group a list of children without adding extra nodes to the DOM. Usage:\n\n<>\n  <ChildA />\n  <ChildB />\n</>\n\nOr explicitly:\n<React.Fragment>\n  <ChildA />\n  <ChildB />\n</React.Fragment>\n\nWhen to use them:\n1. When a component needs to return multiple elements\n2. To avoid unnecessary wrapper divs that can break CSS or layout\n3. When table rows need to render multiple children\n4. When you need to assign keys to a group (explicit Fragment syntax)\n\nBenefits:\n1. Cleaner DOM structure\n2. Better performance with less nesting\n3. No impact on CSS styling\n\nFragments don't create an actual DOM element, they're just a logical grouping.",
			isLearnt: false,
			tags: ['fragments', 'components', 'jsx'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 3: TypeScript for React
		{
			id: 'q-3-1',
			themeId: 'theme-3',
			question:
				'How do you define prop types for a React component in TypeScript?',
			answer:
				"There are several ways to define prop types in TypeScript with React:\n\n1. Using an interface:\ninterface Props {\n  name: string;\n  age?: number; // Optional\n  onClick: () => void;\n}\n\nconst MyComponent: React.FC<Props> = ({ name, age, onClick }) => {...}\n\n2. Using type alias:\ntype Props = {\n  title: string;\n  isActive: boolean;\n};\n\n3. For class components:\nclass MyComponent extends React.Component<Props> {...}\n\n4. With default props:\ninterface Props {\n  color?: string;\n}\n\nconst MyComponent = ({ color = 'blue' }: Props) => {...}\n\nTypeScript provides better type safety than PropTypes, catching errors at compile time rather than runtime.",
			isLearnt: true,
			tags: ['typescript', 'props', 'components'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-3-2',
			themeId: 'theme-3',
			question:
				'What are TypeScript utility types and how are they useful in React?',
			answer:
				"TypeScript provides several utility types that are particularly useful in React:\n\n1. Partial<T> - Makes all properties in T optional\n   Useful for default props or state updates\n\n2. Required<T> - Makes all properties in T required\n\n3. Readonly<T> - Makes all properties in T readonly\n   Useful for immutable props\n\n4. Pick<T, K> - Selects subset of properties from T\n   type ButtonProps = Pick<Props, 'size' | 'color'>\n\n5. Omit<T, K> - Removes properties from T\n   type TextProps = Omit<Props, 'onClick'>\n\n6. Record<K, T> - Creates an object type with keys K and values T\n   type Pages = Record<string, React.ComponentType>\n\n7. ReturnType<T> - Gets return type of a function\n   type AppState = ReturnType<typeof rootReducer>\n\nThese utilities help create precise types while reducing duplication.",
			isLearnt: false,
			tags: ['typescript', 'utility-types', 'props'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-3-3',
			themeId: 'theme-3',
			question: 'How do you type React hooks in TypeScript?',
			answer:
				"Here's how to type common React hooks in TypeScript:\n\n1. useState:\nconst [count, setCount] = useState<number>(0);\n\n2. useEffect:\nuseEffect(() => {...}, []); // No specific typing needed\n\n3. useContext:\nconst context = useContext(MyContext); // Inferred from context creation\n\n4. useReducer:\ntype State = { count: number };\ntype Action = { type: 'increment' | 'decrement' };\nconst reducer = (state: State, action: Action): State => {...};\nconst [state, dispatch] = useReducer(reducer, { count: 0 });\n\n5. useRef (DOM reference):\nconst inputRef = useRef<HTMLInputElement>(null);\n\n6. useRef (mutable value):\nconst intervalRef = useRef<number | null>(null);\n\n7. Custom hooks:\nfunction useCustomHook(initial: string): [string, (value: string) => void] {...}\n\nTypeScript can often infer types, but explicit typing helps catch errors early.",
			isLearnt: false,
			tags: ['typescript', 'hooks', 'typing'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-3-4',
			themeId: 'theme-3',
			question: 'What are TypeScript generics and how are they used in React?',
			answer:
				"Generics allow creating reusable components that work with multiple types. Usage in React:\n\n1. Generic components:\ninterface ListProps<T> {\n  items: T[];\n  renderItem: (item: T) => React.ReactNode;\n}\n\nfunction List<T>({ items, renderItem }: ListProps<T>) {\n  return <div>{items.map(renderItem)}</div>;\n}\n\n// Usage:\n<List<number> items={[1, 2, 3]} renderItem={(n) => <div>{n}</div>} />\n\n2. Generic hooks:\nfunction useArray<T>(initial: T[]) {\n  const [value, setValue] = useState<T[]>(initial);\n  ...\n}\n\n3. Generic context:\ninterface ContextValue<T> {\n  data: T;\n  setData: (value: T) => void;\n}\n\nconst MyContext = createContext<ContextValue<any>>(null!);\n\nGenerics provide type safety while maintaining flexibility. They're especially useful for reusable components and hooks that need to work with different data types.",
			isLearnt: false,
			tags: ['typescript', 'generics', 'components'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-3-5',
			themeId: 'theme-3',
			question: 'How do you type React event handlers in TypeScript?',
			answer:
				"React events can be typed using the synthetic event types from React. Examples:\n\n1. Click event:\nconst handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {...};\n\n2. Change event (form inputs):\nconst handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n  setValue(e.target.value);\n};\n\n3. Submit event:\nconst handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {\n  e.preventDefault();\n  ...\n};\n\n4. Keyboard event:\nconst handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {\n  if (e.key === 'Enter') {...}\n};\n\nThe generic parameter (<HTMLButtonElement>) specifies the element type the event is attached to. This gives you proper type inference for event properties like target.\n\nFor custom events or event emitters, you can use:\nReact.SyntheticEvent as a base type for all React events.",
			isLearnt: false,
			tags: ['typescript', 'events', 'handlers'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 4: CSS and Styling
		{
			id: 'q-4-1',
			themeId: 'theme-4',
			question: 'What are CSS-in-JS libraries and what are their advantages?',
			answer:
				"CSS-in-JS libraries allow writing CSS directly in JavaScript code. Popular options include styled-components, Emotion, and JSS. Advantages:\n\n1. Scoped styles - No global namespace pollution\n2. Dynamic styling - Props/themes can modify styles\n3. Automatic vendor prefixing\n4. Critical CSS extraction (for SSR)\n5. Easier maintenance - Styles colocated with components\n6. JavaScript power - Use variables, functions, etc.\n7. Theming support\n\nExample with styled-components:\nconst Button = styled.button`\n  background: ${props => props.primary ? 'blue' : 'white'};\n  color: ${props => props.primary ? 'white' : 'black'};\n  padding: 1rem;\n`;\n\nDisadvantages:\n1. Runtime cost (though many libraries optimize this)\n2. Learning curve\n3. Debugging can be harder\n\nCSS-in-JS is particularly popular in React ecosystems.",
			isLearnt: false,
			tags: ['css-in-js', 'styled-components', 'styling'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-4-2',
			themeId: 'theme-4',
			question: 'Explain CSS Grid and Flexbox and when to use each',
			answer:
				'CSS Grid and Flexbox are modern layout systems in CSS:\n\nFlexbox:\n1. One-dimensional layout (row OR column)\n2. Aligns items within a container\n3. Great for component-level layouts\n4. Use when:\n   - You need content to dictate layout\n   - Distributing space along a single axis\n   - Aligning items within a container\n\nCSS Grid:\n1. Two-dimensional layout (rows AND columns)\n2. Defines relationships between rows and columns\n3. Great for page-level layouts\n4. Use when:\n   - You need precise control over both rows and columns\n   - Creating complex layouts with overlapping areas\n   - The layout should dictate content placement\n\nThey work well together - use Grid for overall page layout and Flexbox for individual components.',
			isLearnt: false,
			tags: ['css', 'layout', 'grid', 'flexbox'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-4-3',
			themeId: 'theme-4',
			question: 'What are CSS Modules and how do they solve scoping issues?',
			answer:
				"CSS Modules are CSS files where all class names are scoped locally by default. How they work:\n\n1. Each CSS file is treated as a separate module\n2. Class names are automatically transformed to unique identifiers\n3. You import the CSS as a JavaScript object\n4. Use the imported object to reference class names\n\nExample:\n/* styles.module.css */\n.button { color: red; }\n\n// Component.js\nimport styles from './styles.module.css';\n\nfunction Button() {\n  return <button className={styles.button}>Click</button>;\n}\n\nBenefits:\n1. Automatic scoping - no naming collisions\n2. Explicit dependencies - styles are imported where used\n3. Works with regular CSS syntax\n4. Can still have global styles when needed\n5. Supported by most build tools (webpack, vite, etc.)\n\nCSS Modules provide component-scoped styling without runtime JavaScript.",
			isLearnt: false,
			tags: ['css-modules', 'scoping', 'styling'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 5: State Management
		{
			id: 'q-5-1',
			themeId: 'theme-5',
			question: 'What are the differences between Redux and React Context?',
			answer:
				'Key differences between Redux and React Context:\n\nRedux:\n1. External state management library\n2. Single centralized store\n3. Immutable updates via reducers\n4. Middleware support (thunks, sagas, etc.)\n5. Optimized re-renders with selectors\n6. DevTools for time-travel debugging\n7. More boilerplate code\n\nReact Context:\n1. Built into React\n2. Designed for passing data through component tree\n3. No built-in state update patterns\n4. Re-renders all consumers when context value changes\n5. Simpler setup for small apps\n6. No middleware or devtools\n\nWhen to use:\n- Redux: Large apps with complex state logic\n- Context: Simple prop drilling avoidance or theme/UI state\n\nThey can be used together - Redux for app state, Context for UI state.',
			isLearnt: false,
			tags: ['redux', 'context', 'state-management'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-5-2',
			themeId: 'theme-5',
			question: 'Explain the Flux architecture pattern',
			answer:
				'Flux is an application architecture pattern Facebook developed for client-side web applications. Core concepts:\n\n1. Unidirectional data flow:\n   Action -> Dispatcher -> Store -> View\n\n2. Components:\n   - Actions: Events that trigger state changes\n   - Dispatcher: Central hub that manages all data flow\n   - Stores: Contain application state and logic\n   - Views: React components that render UI\n\n3. How it works:\n   - User interaction triggers an action\n   - Dispatcher receives action and sends to stores\n   - Stores update state and emit change events\n   - Views re-render with new state\n\nKey benefits:\n1. Predictable state management\n2. Easier to reason about state changes\n3. Clear separation of concerns\n\nRedux is inspired by Flux but simplifies it with a single store and pure reducers.',
			isLearnt: true,
			tags: ['flux', 'architecture', 'state-management'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 6: Performance Optimization
		{
			id: 'q-6-1',
			themeId: 'theme-6',
			question:
				'What are some common React performance optimization techniques?',
			answer:
				"Common React performance optimizations:\n\n1. Memoization:\n   - React.memo for components\n   - useMemo for expensive calculations\n   - useCallback for function references\n\n2. Virtualization for long lists (react-window, react-virtualized)\n\n3. Code splitting:\n   - React.lazy for component-level splitting\n   - Dynamic imports\n\n4. Avoiding reconciliation:\n   - Proper use of keys in lists\n   - ShouldComponentUpdate/PureComponent\n\n5. Optimizing context:\n   - Split contexts to avoid unnecessary re-renders\n   - Memoize context values\n\n6. Production builds (removes dev checks and warnings)\n\n7. Debouncing/throttling event handlers\n\n8. Web Workers for CPU-intensive tasks\n\nMeasure first with React DevTools Profiler before optimizing - don't prematurely optimize.",
			isLearnt: false,
			tags: ['performance', 'optimization', 'react'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-6-2',
			themeId: 'theme-6',
			question: 'What is code splitting and how to implement it in React?',
			answer:
				"Code splitting is a technique to split your code into smaller bundles that can be loaded on demand. In React:\n\n1. **React.lazy()**:\n   ```jsx\n   const LazyComponent = React.lazy(() => import('./LazyComponent'));\n   \n   function MyComponent() {\n     return (\n       <Suspense fallback={<div>Loading...</div>}>\n         <LazyComponent />\n       </Suspense>\n     );\n   }\n   ```\n\n2. **Route-based splitting** (with React Router):\n   ```jsx\n   const Home = React.lazy(() => import('./routes/Home'));\n   ```\n\n3. **Dynamic imports**:\n   ```js\n   import('./math').then(math => {\n     console.log(math.add(16, 26));\n   });\n   ```\n\nBenefits:\n- Faster initial load time\n- Reduced bundle size\n- Better caching\n\nTools: Next.js automatically splits pages, Webpack supports it via `SplitChunksPlugin`.",
			isLearnt: true,
			tags: ['performance', 'bundling', 'react-lazy'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-6-3',
			themeId: 'theme-6',
			question: 'How to optimize React re-renders?',
			answer:
				'Key techniques:\n\n1. **React.memo** for component memoization:\n   ```jsx\n   const MemoizedComponent = React.memo(MyComponent);\n   ```\n\n2. **useMemo** for expensive calculations:\n   ```js\n   const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n   ```\n\n3. **useCallback** for stable function references:\n   ```js\n   const memoizedCallback = useCallback(() => {\n     doSomething(a, b);\n   }, [a, b]);\n   ```\n\n4. **Avoid inline objects/functions** in props\n5. **Virtualize long lists** (react-window)\n6. **Profile with React DevTools** to find bottlenecks\n7. **Use Context selectively** (split contexts or memoize values)\n\nRemember: Optimize only after measuring performance issues!',
			isLearnt: true,
			tags: ['react', 'memoization', 'rendering'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-6-4',
			themeId: 'theme-6',
			question: 'What are Web Workers and when to use them?',
			answer:
				"Web Workers allow running scripts in background threads. Usage in React:\n\n1. **Offload CPU-intensive tasks** (image processing, calculations)\n2. **Keep UI responsive** during heavy operations\n\nImplementation:\n```js\n// worker.js\nself.onmessage = function(e) {\n  const result = heavyComputation(e.data);\n  postMessage(result);\n};\n\n// Main thread\nconst worker = new Worker('worker.js');\nworker.postMessage(inputData);\nworker.onmessage = (e) => setResult(e.data);\n```\n\nLimitations:\n- No DOM access\n- Limited communication (postMessage)\n- Not suitable for small tasks (overhead)\n\nAlternatives:\n- `react-worker-components` (experimental)\n- WASM for heavy computations",
			isLearnt: true,
			tags: ['performance', 'web-workers', 'multithreading'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 7: Testing Frontend
		{
			id: 'q-7-1',
			themeId: 'theme-7',
			question: 'What are the main types of frontend testing?',
			answer:
				'1. **Unit Testing**:\n   - Tests individual functions/components\n   - Tools: Jest, Vitest\n\n2. **Integration Testing**:\n   - Tests component interactions\n   - Tools: React Testing Library\n\n3. **End-to-End (E2E) Testing**:\n   - Tests full user flows\n   - Tools: Cypress, Playwright\n\n4. **Visual Regression Testing**:\n   - Detects UI changes\n   - Tools: Storybook with Chromatic\n\n5. **Accessibility Testing**:\n   - Checks a11y compliance\n   - Tools: axe-core, Lighthouse\n\n6. **Performance Testing**:\n   - Measures load times\n   - Tools: Lighthouse, WebPageTest\n\nTesting Pyramid recommendation:\n- 70% Unit\n- 20% Integration\n- 10% E2E',
			isLearnt: true,
			tags: ['testing', 'jest', 'cypress'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-7-2',
			themeId: 'theme-7',
			question: 'How to test React components with React Testing Library?',
			answer:
				"Best practices:\n\n1. **Render component**:\n   ```jsx\n   render(<Button onClick={mockFn}>Click</Button>);\n   ```\n\n2. **Query elements** (prioritize by accessibility):\n   ```js\n   screen.getByRole('button', { name: /click/i });\n   screen.getByText(/click/i);\n   ```\n\n3. **Simulate user events**:\n   ```js\n   fireEvent.click(button);\n   userEvent.type(input, 'hello'); // @testing-library/user-event\n   ```\n\n4. **Assertions**:\n   ```js\n   expect(mockFn).toHaveBeenCalled();\n   expect(button).toBeDisabled();\n   ```\n\nKey principles:\n- Test behavior, not implementation\n- Avoid testing implementation details\n- Prefer `userEvent` over `fireEvent`\n- Use `screen.debug()` for troubleshooting",
			isLearnt: true,
			tags: ['testing', 'react-testing-library', 'jest'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-7-3',
			themeId: 'theme-7',
			question: 'What is Jest and how to configure it for React?',
			answer:
				"Jest is a JavaScript testing framework. Configuration for React:\n\n1. **Install**:\n   ```bash\n   npm install --save-dev jest @testing-library/react @testing-library/jest-dom\n   ```\n\n2. **jest.config.js**:\n   ```js\n   module.exports = {\n     testEnvironment: 'jsdom',\n     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],\n     moduleNameMapper: {\n       '^@/(.*)$': '<rootDir>/src/$1', // Alias support\n     },\n   };\n   ```\n\n3. **Key features**:\n   - Snapshot testing\n   - Mocking (`jest.fn()`, `jest.mock()`)\n   - Coverage reports (`--coverage` flag)\n   - Watch mode (`--watch`)\n\n4. **Example test**:\n   ```jsx\n   test('renders button', () => {\n     render(<Button>Test</Button>);\n     expect(screen.getByText('Test')).toBeInTheDocument();\n   });\n   ```",
			isLearnt: true,
			tags: ['jest', 'testing', 'configuration'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 8: Build Tools
		{
			id: 'q-8-1',
			themeId: 'theme-8',
			question: 'Compare Webpack, Vite, and esbuild',
			answer:
				'**Webpack**:\n- Mature, highly configurable\n- Supports code splitting, lazy loading\n- Slower dev server (bundle-based)\n- Large plugin ecosystem\n\n**Vite**:\n- Instant dev server (ESM-based)\n- Fast builds (uses Rollup + esbuild)\n- Opinionated but flexible\n- Built for modern browsers\n\n**esbuild**:\n- Extremely fast (Go-based)\n- Minimal configuration\n- Limited plugin system\n- Often used as a transformer in other tools\n\nWhen to use:\n- **Legacy projects**: Webpack\n- **New projects**: Vite\n- **Tooling/CLI**: esbuild',
			isLearnt: false,
			tags: ['webpack', 'vite', 'esbuild'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-8-2',
			themeId: 'theme-8',
			question: 'What is tree shaking and how does it work?',
			answer:
				'Tree shaking is dead code elimination for JavaScript. Implementation:\n\n1. **Requires ES6 modules** (`import/export`)\n2. **Static analysis** of imports/exports\n3. **Removes unused exports** from final bundle\n\nWebpack example:\n```js\n// webpack.config.js\nmodule.exports = {\n  mode: \'production\', // Enabled by default in production\n  optimization: {\n    usedExports: true,\n  },\n};\n```\n\nFor effective tree shaking:\n- Avoid side effects in module roots\n- Mark side-effect-free packages in `package.json`:\n  ```json\n  {\n    "sideEffects": false\n  }\n  ```\n- Use supported bundlers (Webpack, Rollup, Vite)',
			isLearnt: false,
			tags: ['bundling', 'optimization', 'webpack'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},

		// Theme 9: Browser APIs
		{
			id: 'q-9-1',
			themeId: 'theme-9',
			question: 'What are Service Workers and how to use them for PWA?',
			answer:
				"Service Workers are scripts that run in the background. PWA usage:\n\n1. **Registration**:\n   ```js\n   if ('serviceWorker' in navigator) {\n     navigator.serviceWorker.register('/sw.js');\n   }\n   ```\n\n2. **Caching (Cache API)**:\n   ```js\n   self.addEventListener('install', (e) => {\n     e.waitUntil(\n       caches.open('v1').then((cache) => \n         cache.addAll(['/', '/app.js'])\n       )\n     );\n   });\n   ```\n\n3. **Fetch interception**:\n   ```js\n   self.addEventListener('fetch', (e) => {\n     e.respondWith(\n       caches.match(e.request).then((response) => \n         response || fetch(e.request)\n       )\n     );\n   });\n   ```\n\nKey features:\n- Offline support\n- Push notifications\n- Background sync",
			isLearnt: false,
			tags: ['pwa', 'service-workers', 'caching'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
		{
			id: 'q-9-2',
			themeId: 'theme-9',
			question: 'Explain the Web Storage API (localStorage vs sessionStorage)',
			answer:
				"**localStorage**:\n- Persistent across sessions\n- 5-10MB storage limit\n- Same-origin only\n- Methods:\n  ```js\n  localStorage.setItem('key', 'value');\n  const data = localStorage.getItem('key');\n  localStorage.removeItem('key');\n  ```\n\n**sessionStorage**:\n- Cleared when tab closes\n- 5MB limit\n- Tab-specific\n- Same methods as localStorage\n\nUse cases:\n- **localStorage**: User preferences, auth tokens\n- **sessionStorage**: Form data, temporary state\n\nLimitations:\n- Synchronous (can block main thread)\n- Only stores strings (use `JSON.stringify()`)\n- Not secure for sensitive data",
			isLearnt: true,
			tags: ['storage', 'browser-api', 'localstorage'],
			history: [],
			easeFactor: 0,
			interval: 0,
		},
	],
	ui: {
		isCreateThemeActive: false,
		isFocusMode: false,
		isSearchActive: false,
		searchTags: [],
		searchText: '',
		themeToCreateQuestion: null,
		themeToDelete: null,
		questionToDelete: null,
		themeToEdit: null,
		questionToEdit: null,
	},
};

// Link questions to their themes
frontendData.themes.forEach((theme: ITheme) => {
	theme.questions = frontendData.questions.filter(
		(q) => q.themeId === theme.id,
	);
});

export default frontendData;
