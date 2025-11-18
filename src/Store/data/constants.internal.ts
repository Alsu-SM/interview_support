import {
	IDataSlice,
	IHistoryType,
	IHistoryResult,
	IHistoryItemChecked,
	IHistoryItemRead,
} from './types';

// Вспомогательная функция для генерации случайных дат за последнюю неделю
const generateRandomDates = (count: number): Date[] => {
	const dates: Date[] = [];
	const now = new Date();

	for (let i = 0; i < count; i++) {
		// Случайное время за последние 7 дней
		const randomDays = Math.floor(Math.random() * 7);
		const randomHours = Math.floor(Math.random() * 24);
		const randomMinutes = Math.floor(Math.random() * 60);

		const date = new Date(now);
		date.setDate(date.getDate() - randomDays);
		date.setHours(randomHours, randomMinutes, 0, 0);

		dates.push(date);
	}

	return dates.sort((a, b) => a.getTime() - b.getTime());
};

// Вспомогательная функция для генерации истории проверок
const generateCheckHistory = (count: number): IHistoryItemChecked[] => {
	const dates = generateRandomDates(count);
	const results: IHistoryResult[] = [
		IHistoryResult.Easy,
		IHistoryResult.Easy,
		IHistoryResult.Easy,
		IHistoryResult.Medium,
		IHistoryResult.Medium,
		IHistoryResult.Hard,
	];

	return dates.map((date, index) => ({
		id: `check-${Date.now()}-${index}`,
		date,
		type: IHistoryType.Check,
		result: results[Math.floor(Math.random() * results.length)],
	}));
};

// Вспомогательная функция для генерации истории прочтений
const generateReadHistory = (count: number): IHistoryItemRead[] => {
	const dates = generateRandomDates(count);

	return dates.map((date, index) => ({
		id: `read-${Date.now()}-${index}`,
		date,
		type: IHistoryType.Read,
	}));
};

export const initialData: IDataSlice = {
	themes: [
		{
			id: 'react-core',
			name: 'React Core Concepts',
			description:
				'Фундаментальные концепции React: компоненты, состояние, пропсы, жизненный цикл и Virtual DOM',
			questions: [],
			materials: [],
		},
		{
			id: 'react-hooks-advanced',
			name: 'React Hooks & Performance',
			description:
				'Продвинутые хуки, кастомные хуки, оптимизация производительности и лучшие практики',
			questions: [],
			materials: [],
		},
		{
			id: 'typescript-react',
			name: 'TypeScript в React',
			description:
				'Статическая типизация компонентов, пропсов, состояний и событий в React приложениях',
			questions: [],
			materials: [],
		},
		{
			id: 'frontend-architecture',
			name: 'Архитектура FSD',
			description:
				'Feature-Sliced Design: организация масштабируемой и поддерживаемой структуры фронтенд приложения',
			questions: [],
			materials: [],
		},
	],
	questions: [
		// React Core Concepts
		{
			id: 'q-react-virtual-dom',
			themeId: 'react-core',
			question:
				'Что такое Virtual DOM и как работает процесс реконсиляции в React?',
			answer: `## Virtual DOM в React

Virtual DOM (виртуальный DOM) - это легковесная JavaScript-репрезентация реального DOM. React использует Virtual DOM для оптимизации производительности.

### Как это работает:

1. **При изменении состояния** компонента создается новое Virtual DOM дерево
2. **Diffing алгоритм** сравнивает новое и предыдущее Virtual DOM деревья
3. **Вычисляются минимальные изменения** (reconciliation)
4. **Пакетное обновление** реального DOM

### Преимущества:
- **Производительность**: Минимизация операций с реальным DOM
- **Абстракция**: Разработчику не нужно думать о прямых манипуляциях с DOM
- **Кросс-браузерность**: React абстрагирует браузерные различия

### Пример процесса:
\`\`\`jsx
// При изменении состояния
this.setState({ count: 1 });

// React создает новое VDOM дерево
// Сравнивает с предыдущим
// Вычисляет разницу
// Применяет только необходимые изменения к реальному DOM
\`\`\`

### Reconciliation:
React использует эвристический алгоритм O(n) для сравнения деревьев, что делает процесс очень эффективным.`,
			tags: ['virtual-dom', 'reconciliation', 'performance', 'core'],
			history: generateCheckHistory(8),
		},
		{
			id: 'q-react-components',
			themeId: 'react-core',
			question:
				'В чем разница между функциональными и классовыми компонентами? Когда использовать каждый подход?',
			answer: `## Функциональные vs Классовые компоненты

### Функциональные компоненты:
\`\`\`jsx
const Welcome = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};
\`\`\`

### Классовые компоненты:
\`\`\`jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
\`\`\`

### Ключевые различия:

| Аспект | Функциональные | Классовые |
|--------|----------------|-----------|
| Синтаксис | Проще, меньше кода | Более многословный |
| Хуки | ✅ Полная поддержка | ❌ Только lifecycle методы |
| this | Не используется | Требует привязки |
| Производительность | Легче оптимизировать | Тяжелее |

### Когда использовать:
- **Функциональные**: Новые проекты, использование хуков
- **Классовые**: Легационный код, Error Boundaries

### Миграция с классов на функции:
\`\`\`jsx
// Был класс
class Counter extends React.Component {
  state = { count: 0 };
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return (
      <button onClick={this.increment}>
        Count: {this.state.count}
      </button>
    );
  }
}

// Стал функцией
const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increment = () => setCount(count + 1);
  
  return (
    <button onClick={increment}>
      Count: {count}
    </button>
  );
};
\`\`\``,
			tags: ['components', 'functional', 'class', 'hooks'],
			history: generateCheckHistory(6),
		},
		{
			id: 'q-react-keys',
			themeId: 'react-core',
			question:
				'Зачем нужны ключи (keys) в React при рендере списков? Что будет если не использовать ключи?',
			answer: `## Ключи (Keys) в React

Ключи помогают React идентифицировать элементы в списке между рендерами.

### Зачем нужны:
- **Идентификация** элементов при изменениях
- **Оптимизация** процесса реконсиляции
- **Сохранение состояния** компонентов в списке

### Правила использования:
- Должны быть **уникальными** среди соседних элементов
- Лучше использовать **стабильные ID** из данных
- **Избегать** индексов массивов если порядок может меняться

### Пример:
\`\`\`jsx
// Хорошо - стабильные ID
const todoItems = todos.map(todo =>
  <li key={todo.id}>
    {todo.text}
  </li>
);

// Плохо - индексы (может вызвать проблемы)
const todoItems = todos.map((todo, index) =>
  <li key={index}>
    {todo.text}
  </li>
);
\`\`\`

### Что происходит без ключей:
- React использует индексы по умолчанию
- Может возникнуть неправильное обновление состояния
- Потеря фокуса в формах
- Снижение производительности

### Проблемы с индексами:
\`\`\`jsx
// Изначальный список
['A', 'B', 'C'] // keys: 0, 1, 2

// После удаления 'A'
['B', 'C'] // keys: 0, 1 (но теперь B имеет key=0 вместо 1)
// React может перепутать состояния элементов!
\`\`\``,
			tags: ['keys', 'lists', 'performance', 'reconciliation'],
			history: generateCheckHistory(7),
		},

		// React Hooks & Performance
		{
			id: 'q-hooks-rules',
			themeId: 'react-hooks-advanced',
			question:
				'Какие правила хуков существуют и почему они важны? Что произойдет если нарушить эти правила?',
			answer: `## Правила хуков

### Основные правила:
1. **Вызывать хуки только на верхнем уровне**
   - Не в циклах, условиях, вложенных функциях
2. **Вызывать хуки только из React-функций**
   - Функциональных компонентов
   - Кастомных хуков

### Почему это важно:
- **Гарантируется порядок** вызова хуков между рендерами
- **Сохранение состояния** между вызовами
- **Предсказуемое поведение** компонентов

### Правильный пример:
\`\`\`jsx
function MyComponent() {
  // ✅ На верхнем уровне
  const [state, setState] = useState(null);
  const effect = useEffect(() => {});
  
  if (condition) {
    // ❌ Нарушение правил!
    // const [bad, setBad] = useState(null);
  }
  
  // ✅ Можно в кастомном хуке
  const custom = useCustomHook();
}
\`\`\`

### Что происходит при нарушении:
- **Непредсказуемое поведение** состояния
- **Баги** с обновлениями
- **Потеря состояния** между рендерами

### ESLint плагин:
Используйте \`eslint-plugin-react-hooks\` для автоматической проверки правил.

### Как обойти ограничения:
\`\`\`jsx
// ❌ Плохо - хук в условии
if (condition) {
  useEffect(() => {});
}

// ✅ Хорошо - условие внутри хука
useEffect(() => {
  if (condition) {
    // логика
  }
}, [condition]);
\`\`\``,
			tags: ['hooks', 'rules', 'best-practices', 'eslint'],
			history: generateCheckHistory(5),
		},
		{
			id: 'q-performance-optimization',
			themeId: 'react-hooks-advanced',
			question:
				'Какие методы оптимизации производительности React компонентов вы знаете?',
			answer: `## Оптимизация производительности в React

### 1. React.memo
Предотвращает ререндер когда пропсы не изменились.
\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
\`\`\`

### 2. useCallback
Мемоизирует функции между рендерами.
\`\`\`jsx
const handleClick = useCallback(() => {
  // логика
}, [dependency]);
\`\`\`

### 3. useMemo
Мемоизирует вычисляемые значения.
\`\`\`jsx
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

### 4. Code Splitting
Ленивая загрузка компонентов.
\`\`\`jsx
const LazyComponent = lazy(() => import('./LazyComponent'));
\`\`\`

### 5. Virtualization
Для больших списков.
\`\`\`jsx
import { FixedSizeList } from 'react-window';
\`\`\`

### 6. Профилирование
Использование React DevTools Profiler.

### Практический пример оптимизации:
\`\`\`jsx
const ProductList = ({ products, onProductClick }) => {
  const memoizedClick = useCallback((productId) => {
    onProductClick(productId);
  }, [onProductClick]);
  
  const productMap = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.id] = product;
      return acc;
    }, {});
  }, [products]);
  
  return (
    <div>
      {products.map(product => (
        <MemoizedProductItem
          key={product.id}
          product={product}
          onClick={memoizedClick}
        />
      ))}
    </div>
  );
};

const MemoizedProductItem = React.memo(({ product, onClick }) => {
  return (
    <div onClick={() => onClick(product.id)}>
      {product.name}
    </div>
  );
});
\`\`\`

### Когда НЕ оптимизировать:
- Мелкие, простые компоненты
- Компоненты которые часто меняют пропсы
- На ранних стадиях разработки`,
			tags: ['performance', 'optimization', 'memo', 'useCallback', 'useMemo'],
			history: generateCheckHistory(9),
		},

		// TypeScript в React
		{
			id: 'q-ts-generics',
			themeId: 'typescript-react',
			question:
				'Как типизировать компоненты с дженериками в TypeScript? Приведите примеры.',
			answer: `## Дженерики в React с TypeScript

Дженерики позволяют создавать переиспользуемые компоненты с сохранением типобезопасности.

### Базовый пример:
\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
\`\`\`

### Использование с ограничениями:
\`\`\`tsx
interface BaseItem {
  id: string | number;
}

function List<T extends BaseItem>({ items, renderItem }: ListProps<T>) {
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
\`\`\`

### Практические примеры:

#### 1. Generic Table Component:
\`\`\`tsx
interface Column<T> {
  key: keyof T;
  title: string;
  render?: (value: T[keyof T], item: T) => React.ReactNode;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
}

function Table<T extends { id: string }>({ data, columns }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={String(column.key)}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={String(column.key)}>
                {column.render 
                  ? column.render(item[column.key], item)
                  : String(item[column.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// Использование
interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

const users: User[] = [...];

const userColumns: Column<User>[] = [
  { key: 'name', title: 'Name' },
  { key: 'email', title: 'Email' },
  { 
    key: 'age', 
    title: 'Age',
    render: (value) => <strong>{value} years</strong>
  }
];

<Table data={users} columns={userColumns} />
\`\`\`

#### 2. Generic Form Hook:
\`\`\`tsx
interface FormValues {
  [key: string]: any;
}

function useForm<T extends FormValues>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  
  const handleChange = useCallback((name: keyof T, value: T[keyof T]) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);
  
  return { values, handleChange };
}

// Использование
interface LoginForm {
  email: string;
  password: string;
}

const { values, handleChange } = useForm<LoginForm>({
  email: '',
  password: ''
});
\`\`\``,
			tags: ['typescript', 'generics', 'typing', 'components'],
			history: generateCheckHistory(7),
		},

		// Архитектура FSD
		{
			id: 'q-fsd-rules',
			themeId: 'frontend-architecture',
			question:
				'Какие основные правила и принципы Feature-Sliced Design? Как организовать зависимости между слоями?',
			answer: `## Feature-Sliced Design: правила и принципы

### Основные правила FSD:

#### 1. Правило зависимостей
Модуль может зависеть только от модулей того же или более низкого уровня.

**Уровни (от низкого к высокому):**
- shared
- entities
- features
- widgets
- pages
- app

#### 2. Запрет циклических зависимостей
Никаких импортов по кругу между модулями.

#### 3. Абсолютные импорты
Использование абсолютных путей для лучшей рефакторинга.

#### 4. Изоляция бизнес-логики
Каждая фича содержит свою бизнес-логику.

### Организация зависимостей:

#### Разрешенные зависимости:
\`\`\`
app/ → pages/ → widgets/ → features/ → entities/ → shared/
\`\`\`

#### Запрещенные зависимости:
\`\`\`
shared/ → entities/ ❌ (обратная зависимость)
features/ → pages/ ❌ (нарушение иерархии)
\`\`\`

### Практическая структура:
\`\`\`
src/
├── app/                    # Инициализация приложения
│   ├── styles/
│   ├── providers/
│   └── router/
├── pages/                  # Страницы
│   ├── home/
│   ├── profile/
│   └── settings/
├── widgets/                # Независимые блоки
│   ├── header/
│   ├── sidebar/
│   └── notification-list/
├── features/               # Бизнес-фичи
│   ├── auth/
│   ├── cart/
│   └── search/
├── entities/               # Бизнес-сущности
│   ├── user/
│   ├── product/
│   └── order/
└── shared/                 # Переиспользуемый код
    ├── ui/
    ├── lib/
    └── api/
\`\`\`

### Public API каждого слоя:
Каждый слой экспортирует только через index.ts (public API):
\`\`\`ts
// features/auth/index.ts
export { LoginForm } from './ui/LoginForm';
export { useAuth } from './model/useAuth';
export type { AuthData } from './model/types';
\`\`\`

### Преимущества такого подхода:
- **Масштабируемость**: Легко добавлять новые фичи
- **Поддерживаемость**: Четкие границы ответственности
- **Тестируемость**: Изолированные модули
- **Реюзабельность**: Переиспользование кода

### Инструменты для контроля:
- ESLint правила для FSD
- Madge для визуализации зависимостей
- TypeScript path mapping`,
			tags: ['fsd', 'architecture', 'dependencies', 'structure'],
			history: generateCheckHistory(8),
		},
	],
	materials: [
		// React Core Concepts
		{
			id: 'm-react-rendering',
			themeId: 'react-core',
			title: 'Глубокое погружение в механизм рендеринга React',
			material: `# Механизм рендеринга в React

## Как React рендерит компоненты

### Процесс рендеринга:

1. **Инициализация**: Создание Virtual DOM дерева
2. **Рендер фаза**: Вызов render методов/функций
3. **Commit фаза**: Применение изменений к DOM
4. **Layout эффекты**: Вызов useLayoutEffect
5. **Пассивные эффекты**: Вызов useEffect

### Рендер фаза:
- Выполняется вызов компонентов
- Создается новое Virtual DOM дерево
- Pure компоненты могут "байпасить" эту фазу

### Commit фаза:
- React применяет изменения к DOM
- Синхронно вызываются useLayoutEffect
- После отрисовки вызываются useEffect

## Контролируемые и неконтролируемые компоненты

### Контролируемые:
Управляются через React state
\`\`\`jsx
const ControlledInput = () => {
  const [value, setValue] = useState('');
  
  return (
    <input 
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
\`\`\`

### Неконтролируемые:
Управляются через DOM
\`\`\`jsx
const UncontrolledInput = () => {
  const inputRef = useRef();
  
  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };
  
  return (
    <input ref={inputRef} />
  );
};
\`\`\`

## Паттерны работы с формами

### 1. Controlled Forms
\`\`\`jsx
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  
  return (
    <form>
      <input 
        value={formData.name}
        onChange={handleChange('name')}
      />
      <input 
        value={formData.email}
        onChange={handleChange('email')}
      />
      <textarea 
        value={formData.message}
        onChange={handleChange('message')}
      />
    </form>
  );
};
\`\`\`

### 2. Form Libraries
- React Hook Form (рекомендуется)
- Formik
- Final Form

## Оптимизация рендеринга

### shouldComponentUpdate
В классовых компонентах:
\`\`\`jsx
class MyComponent extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Возвращает true/false для решения о ререндере
    return this.props.value !== nextProps.value;
  }
}
\`\`\`

### React.memo для функциональных
\`\`\`jsx
const MyComponent = React.memo(({ value }) => {
  return <div>{value}</div>;
}, (prevProps, nextProps) => {
  // Кастомная функция сравнения
  return prevProps.value === nextProps.value;
});
\`\`\`

## Работа с большими списками

### Виртуализация:
\`\`\`jsx
import { FixedSizeList } from 'react-window';

const BigList = ({ items }) => (
  <FixedSizeList
    height={400}
    itemCount={items.length}
    itemSize={50}
  >
    {({ index, style }) => (
      <div style={style}>
        {items[index]}
      </div>
    )}
  </FixedSizeList>
);
\`\`\`

### Ленивая загрузка:
\`\`\`jsx
const LazyList = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState(50);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        setVisibleItems(prev => prev + 50);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return items.slice(0, visibleItems).map(item => (
    <div key={item.id}>{item.content}</div>
  ));
};
\`\`\`

## Отладка рендеринга

### React DevTools Profiler
- Запись сессий производительности
- Анализ времени рендеринга
- Выявление лишних ререндеров

### Почему компонент рендерится:
1. Изменение state
2. Изменение props
3. Изменение context
4. Рендер родителя`,
			tags: ['rendering', 'virtual-dom', 'performance', 'forms'],
			history: generateReadHistory(6),
		},

		// React Hooks & Performance
		{
			id: 'm-custom-hooks',
			themeId: 'react-hooks-advanced',
			title: 'Создание эффективных кастомных хуков: паттерны и лучшие практики',
			material: `# Кастомные хуки: продвинутые паттерны

## Что такое кастомные хуки

Кастомные хуки - это JavaScript функции, которые:
- Начинаются с префикса "use"
- Могут вызывать другие хуки
- Инкапсулируют переиспользуемую логику

## Базовый шаблон кастомного хука

\`\`\`jsx
function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  const updateValue = useCallback((newValue) => {
    setValue(newValue);
  }, []);
  
  useEffect(() => {
    // Сайд-эффекты
  }, [value]);
  
  return [value, updateValue];
}
\`\`\`

## Паттерны кастомных хуков

### 1. Хуки для работы с API
\`\`\`jsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(url);
        const result = await response.json();
        
        if (!cancelled) {
          setData(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };
    
    fetchData();
    
    return () => {
      cancelled = true;
    };
  }, [url]);
  
  return { data, loading, error };
}
\`\`\`

### 2. Хуки для управления состоянием форм
\`\`\`jsx
function useForm(initialValues, validationSchema) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const handleChange = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Валидация
    if (validationSchema) {
      const fieldSchema = validationSchema.fields[name];
      if (fieldSchema) {
        try {
          fieldSchema.validateSync(value);
          setErrors(prev => ({ ...prev, [name]: '' }));
        } catch (error) {
          setErrors(prev => ({ ...prev, [name]: error.message }));
        }
      }
    }
  }, [validationSchema]);
  
  const handleBlur = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);
  
  const isValid = Object.keys(errors).every(key => !errors[key]);
  
  return {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setValues
  };
}
\`\`\`

### 3. Хуки для работы с браузерными API
\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading localStorage:', error);
      return initialValue;
    }
  });
  
  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  }, [key, storedValue]);
  
  return [storedValue, setValue];
}

function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    error: null
  });
  
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation(prev => ({
        ...prev,
        error: 'Geolocation not supported'
      }));
      return;
    }
    
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          error: null
        });
      },
      (error) => {
        setLocation(prev => ({
          ...prev,
          error: error.message
        }));
      }
    );
    
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);
  
  return location;
}
\`\`\`

### 4. Хуки для оптимизации производительности
\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

function useThrottle(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());
  
  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);
  
  return throttledValue;
}
\`\`\`

## Композиция хуков

### Создание сложной логики из простых хуков:
\`\`\`jsx
function useUserProfile(userId) {
  const { data: user, loading: userLoading, error: userError } = useApi(\`/users/\${userId}\`);
  const { data: posts, loading: postsLoading, error: postsError } = useApi(\`/users/\${userId}/posts\`);
  
  const loading = userLoading || postsLoading;
  const error = userError || postsError;
  
  return {
    user,
    posts,
    loading,
    error
  };
}
\`\`\`

## Тестирование кастомных хуков

### Использование @testing-library/react-hooks:
\`\`\`jsx
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
\`\`\`

## Лучшие практики

1. **Именование**: Всегда начинать с "use"
2. **Изоляция**: Каждый хук должен решать одну задачу
3. **Композиция**: Собирать сложные хуки из простых
4. **Ошибки**: Обрабатывать ошибки внутри хуков
5. **Оптимизация**: Использовать useCallback/useMemo где нужно
6. **Тестирование**: Покрывать тестами сложную логику

## Распространенные антипаттерны

### 1. Слишком сложные хуки
\`\`\`jsx
// ❌ Плохо - делает слишком много
function useUserDashboard() {
  // управление пользователем, постами, настройками, UI состоянием...
}

// ✅ Хорошо - разделение ответственности
function useUser() { /* ... */ }
function useUserPosts() { /* ... */ }
function useUserSettings() { /* ... */ }
\`\`\`

### 2. Нарушение правил хуков
\`\`\`jsx
// ❌ Плохо - хук в условии
function useConditionalHook(condition) {
  if (condition) {
    const [value, setValue] = useState(null); // Нарушение!
  }
}

// ✅ Хорошо - условие внутри эффекта
function useConditionalHook(condition) {
  const [value, setValue] = useState(null);
  
  useEffect(() => {
    if (condition) {
      // логика
    }
  }, [condition]);
}
\`\`\``,
			tags: ['custom-hooks', 'patterns', 'best-practices', 'composition'],
			history: generateReadHistory(8),
		},

		// TypeScript в React
		{
			id: 'm-ts-advanced',
			themeId: 'typescript-react',
			title: 'Продвинутая типизация в React: утилитарные типы и паттерны',
			material: `# Продвинутая типизация в React с TypeScript

## Утилитарные типы TypeScript для React

### 1. React.ComponentProps
Извлечение пропсов из компонента:
\`\`\`tsx
type ButtonProps = React.ComponentProps<'button'>;
// { onClick: MouseEventHandler, children: ReactNode, ... }

type CustomButtonProps = React.ComponentProps<typeof CustomButton>;
// Пропсы кастомного компонента
\`\`\`

### 2. React.ReactElement & React.ReactNode
\`\`\`tsx
// ReactElement - конкретный элемент
const element: React.ReactElement = <div>Hello</div>;

// ReactNode - любой react-контент
const node: React.ReactNode = 
  'string' || <div /> || null || undefined || [<div />];
\`\`\`

### 3. Условные типы для пропсов
\`\`\`tsx
type ButtonProps = {
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
} & (
  | { as: 'button'; onClick: () => void }
  | { as: 'a'; href: string }
  | { as?: never; onClick?: never; href?: never }
);

const Button: React.FC<ButtonProps> = (props) => {
  if (props.as === 'a') {
    return <a href={props.href}>{props.children}</a>;
  }
  
  return (
    <button 
      type="button" 
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};
\`\`\`

## Типизация контекста

### Безопасный контекст с кастомным хуком:
\`\`\`tsx
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
\`\`\`

## Типизация рефов

### ForwardRef с типами:
\`\`\`tsx
interface InputProps {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label>{label}</label>
        <input 
          ref={ref}
          {...props}
        />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

// Использование
const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  return <Input ref={inputRef} label="Email" />;
};
\`\`\`

### useImperativeHandle:
\`\`\`tsx
interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
}

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomInput = React.forwardRef<CustomInputHandle, CustomInputProps>(
  ({ value, onChange }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
      clear: () => {
        onChange('');
        inputRef.current?.focus();
      }
    }));
    
    return (
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    );
  }
);

// Использование
const Parent = () => {
  const inputRef = useRef<CustomInputHandle>(null);
  
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  
  return <CustomInput ref={inputRef} value="" onChange={() => {}} />;
};
\`\`\`

## Типизация событий

### Generic event handlers:
\`\`\`tsx
const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // логика
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.clientX, e.clientY);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Click</button>
    </form>
  );
};
\`\`\`

### Кастомные события:
\`\`\`tsx
interface CustomSelectEvent<T> {
  target: {
    value: T;
    name: string;
  };
}

interface SelectProps<T> {
  value: T;
  onChange: (event: CustomSelectEvent<T>) => void;
  options: { value: T; label: string }[];
}

function Select<T>({ value, onChange, options }: SelectProps<T>) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = options.find(opt => 
      String(opt.value) === e.target.value
    )?.value;
    
    if (selectedValue !== undefined) {
      onChange({
        target: {
          value: selectedValue,
          name: e.target.name
        }
      });
    }
  };
  
  return (
    <select value={String(value)} onChange={handleChange}>
      {options.map(option => (
        <option key={String(option.value)} value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
\`\`\`

## Типизация Higher-Order Components

### HOC с типами:
\`\`\`tsx
interface WithLoadingProps {
  loading: boolean;
}

function withLoading<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & WithLoadingProps> {
  return ({ loading, ...props }: WithLoadingProps & P) => {
    if (loading) {
      return <div>Loading...</div>;
    }
    
    return <Component {...props as P} />;
  };
}

// Использование
interface UserProfileProps {
  user: User;
  onEdit: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onEdit }) => {
  return <div>{user.name}</div>;
};

const UserProfileWithLoading = withLoading(UserProfile);

// Автоматически получает типы UserProfileProps & WithLoadingProps
\`\`\`

## Паттерны для сложных типов

### 1. Discriminated Unions:
\`\`\`tsx
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };

function useAsyncState<T>() {
  const [state, setState] = useState<AsyncState<T>>({ status: 'idle' });
  
  // TypeScript знает структуру state в каждом case
  const render = () => {
    switch (state.status) {
      case 'idle':
        return 'Ready to load';
      case 'loading':
        return 'Loading...';
      case 'success':
        return \`Data: \${state.data}\`; // T доступен здесь
      case 'error':
        return \`Error: \${state.error}\`;
    }
  };
  
  return { state, setState, render };
}
\`\`\`

### 2. Template Literal Types:
\`\`\`tsx
type Size = 'sm' | 'md' | 'lg';
type Color = 'primary' | 'secondary' | 'danger';

type ButtonClass = \`btn-\${Size} btn-\${Color}\`;

// Результат: 
// "btn-sm btn-primary" | "btn-sm btn-secondary" | ... 
// "btn-md btn-primary" | ... etc

const getButtonClass = (size: Size, color: Color): ButtonClass => {
  return \`btn-\${size} btn-\${color}\` as ButtonClass;
};
\`\`\`

## Утилиты для работы с типами React

### Создание пропсов с default values:
\`\`\`tsx
interface BaseButtonProps {
  variant: 'primary' | 'secondary';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

// Пропсы которые действительно требуются
type ButtonProps = PartialBy<BaseButtonProps, 'variant' | 'size'>;

// Утилитарный тип
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'medium',
  disabled = false,
  ...props 
}) => {
  // ...
};
\`\`\`

### Типы для styled-components:
\`\`\`tsx
import styled from 'styled-components';

interface ContainerProps {
  $padding?: string;
  $margin?: string;
  $maxWidth?: string;
}

const Container = styled.div<ContainerProps>\`
  padding: \${props => props.$padding || '1rem'};
  margin: \${props => props.$margin || '0'};
  max-width: \${props => props.$maxWidth || '1200px'};
\`;

// Префикс $ чтобы избежать конфликтов с DOM атрибутами
\`\`\`

## Миграция с JavaScript на TypeScript

### Постепенная миграция:
1. Начать с @ts-check и JSDoc
2. Переименовать файлы в .tsx
3. Добавить базовые типы
4. Исправить ошибки постепенно
5. Включить strict mode

### JSDoc для постепенной типизации:
\`\`\`jsx
// @ts-check

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 */

/**
 * @param {User} user
 * @returns {React.ReactElement}
 */
function UserProfile({ user }) {
  return <div>{user.name}</div>;
}
\`\`\`

## Инструменты и настройки

### tsconfig.json для React:
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  }
}
\`\`\`

### Плагины для ESLint:
- @typescript-eslint/eslint-plugin
- eslint-plugin-react-hooks

## Производительность типов

### Избегание медленных типов:
\`\`\`tsx
// ❌ Медленно - рекурсивный тип
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ✅ Быстро - ограниченная глубина
type ShallowPartial<T> = {
  [P in keyof T]?: T[P];
};

type MediumPartial<T> = {
  [P in keyof T]?: T[P] extends object 
    ? { [K in keyof T[P]]?: T[P][K] } 
    : T[P];
};
\`\`\``,
			tags: ['typescript', 'advanced', 'typing', 'patterns', 'utility-types'],
			history: generateReadHistory(7),
		},

		// Архитектура FSD
		{
			id: 'm-fsd-implementation',
			themeId: 'frontend-architecture',
			title: 'Практическая реализация FSD: от структуры до деплоя',
			material: `# Практическое руководство по FSD

## Настройка проекта с FSD

### Базовая структура:
\`\`\`
src/
├── app/                    # Инициализация приложения
│   ├── styles/            # Глобальные стили
│   │   ├── globals.scss
│   │   └── variables.scss
│   ├── providers/         # Провайдеры приложения
│   │   ├── index.ts
│   │   ├── theme-provider.tsx
│   │   └── router-provider.tsx
│   ├── router/            # Маршрутизация
│   │   ├── index.tsx
│   │   └── routes.ts
│   └── main.tsx          # Точка входа
├── pages/                 # Страницы приложения
│   ├── home/
│   │   ├── index.ts
│   │   └── ui/
│   ├── profile/
│   │   ├── index.ts
│   │   ├── model/
│   │   └── ui/
│   └── settings/
├── widgets/               # Независимые виджеты
│   ├── header/
│   │   ├── index.ts
│   │   ├── model/
│   │   └── ui/
│   ├── sidebar/
│   └── notification-list/
├── features/              # Бизнес-фичи
│   ├── auth/
│   │   ├── index.ts
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   ├── use-auth.ts
│   │   │   └── auth-service.ts
│   │   ├── ui/
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   └── lib/
│   ├── cart/
│   └── search/
├── entities/              # Бизнес-сущности
│   ├── user/
│   │   ├── index.ts
│   │   ├── model/
│   │   │   ├── types.ts
│   │   │   ├── user-service.ts
│   │   │   └── use-user.ts
│   │   └── ui/
│   ├── product/
│   └── order/
└── shared/                # Переиспользуемый код
    ├── ui/
    │   ├── index.ts
    │   ├── button/
    │   ├── input/
    │   └── modal/
    ├── lib/
    │   ├── utils/
    │   ├── constants/
    │   └── helpers/
    └── api/
        ├── index.ts
        ├── client.ts
        └── types.ts
\`\`\`

## Public API каждого слоя

### app/index.ts:
\`\`\`tsx
export { App } from './app';
export type { AppProps } from './app';
\`\`\`

### pages/home/index.ts:
\`\`\`tsx
export { HomePage } from './ui/home-page';
\`\`\`

### features/auth/index.ts:
\`\`\`tsx
export { LoginForm } from './ui/login-form';
export { RegisterForm } from './ui/register-form';
export { useAuth } from './model/use-auth';
export type { AuthData, User } from './model/types';
\`\`\`

### shared/ui/index.ts:
\`\`\`tsx
export { Button } from './button';
export { Input } from './input';
export { Modal } from './modal';
export type { ButtonProps, InputProps, ModalProps } from './types';
\`\`\`

## Настройка абсолютных импортов

### tsconfig.json:
\`\`\`json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/app": ["./src/app/*"],
      "@/pages": ["./src/pages/*"],
      "@/widgets": ["./src/widgets/*"],
      "@/features": ["./src/features/*"],
      "@/entities": ["./src/entities/*"],
      "@/shared": ["./src/shared/*"]
    }
  }
}
\`\`\`

### Vite config:
\`\`\`ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
});
\`\`\`

## ESLint правила для FSD

### .eslintrc.js:
\`\`\`js
module.exports = {
  rules: {
    'fsd-path-checker/fsd-path-checker': [
      'error',
      {
        alias: '@',
        ignoreSameLayerModules: true,
      },
    ],
    'fsd-import-validator/fsd-import-validator': [
      'error',
      {
        alias: '@',
        layers: {
          app: ['pages', 'widgets', 'features', 'entities', 'shared'],
          pages: ['widgets', 'features', 'entities', 'shared'],
          widgets: ['features', 'entities', 'shared'],
          features: ['entities', 'shared'],
          entities: ['shared'],
          shared: ['shared'],
        },
      },
    ],
  },
  plugins: [
    'fsd-path-checker',
    'fsd-import-validator',
  ],
};
\`\`\`

## Пример фичи аутентификации

### features/auth/model/types.ts:
\`\`\`tsx
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthData {
  user: User;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials extends LoginCredentials {
  name: string;
}
\`\`\`

### features/auth/model/use-auth.ts:
\`\`\`tsx
import { useState, useCallback } from 'react';
import { authApi } from '@/shared/api';
import { AuthData, LoginCredentials, RegisterCredentials } from './types';

export const useAuth = () => {
  const [user, setUser] = useState<AuthData['user'] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const login = useCallback(async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);
    
    try {
      const authData = await authApi.login(credentials);
      setUser(authData.user);
      localStorage.setItem('token', authData.token);
      return authData;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);
  
  const register = useCallback(async (credentials: RegisterCredentials) => {
    setLoading(true);
    setError(null);
    
    try {
      const authData = await authApi.register(credentials);
      setUser(authData.user);
      localStorage.setItem('token', authData.token);
      return authData;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);
  
  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('token');
  }, []);
  
  return {
    user,
    loading,
    error,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  };
};
\`\`\`

### features/auth/ui/login-form.tsx:
\`\`\`tsx
import { useState } from 'react';
import { useAuth } from '../model/use-auth';
import { Button, Input } from '@/shared/ui';

interface LoginFormProps {
  onSuccess?: () => void;
  onSwitchToRegister?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSuccess,
  onSwitchToRegister,
}) => {
  const { login, loading, error } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await login(formData);
      onSuccess?.();
    } catch {
      // Ошибка обрабатывается в useAuth
    }
  };
  
  const handleChange = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange('email')}
          disabled={loading}
        />
      </div>
      
      <div>
        <Input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange('password')}
          disabled={loading}
        />
      </div>
      
      {error && <div>{error}</div>}
      
      <Button type="submit" disabled={loading}>
        {loading ? 'Loading...' : 'Login'}
      </Button>
      
      <button type="button" onClick={onSwitchToRegister}>
        Don't have an account? Register
      </button>
    </form>
  );
};
\`\`\`

## Маршрутизация в FSD

### app/router/routes.ts:
\`\`\`tsx
export const routes = [
  {
    path: '/',
    element: <HomePage />,
    auth: false,
  },
  {
    path: '/login',
    element: <LoginPage />,
    auth: false,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
    auth: true,
  },
];
\`\`\`

### app/router/index.tsx:
\`\`\`tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import { AuthGuard } from '@/features/auth';

const router = createBrowserRouter(
  routes.map(route => ({
    ...route,
    element: route.auth ? (
      <AuthGuard>{route.element}</AuthGuard>
    ) : (
      route.element
    ),
  }))
);

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
\`\`\`

## Тестирование в FSD

### Структура тестов:
\`\`\`
src/
├── features/
│   └── auth/
│       ├── __tests__/
│       │   ├── use-auth.test.ts
│       │   └── login-form.test.tsx
│       ├── index.ts
│       ├── model/
│       └── ui/
└── shared/
    └── ui/
        ├── __tests__/
        │   └── button.test.tsx
        ├── index.ts
        └── button/
\`\`\`

### Пример теста:
\`\`\`tsx
// features/auth/__tests__/use-auth.test.ts
import { renderHook, act } from '@testing-library/react';
import { useAuth } from '../model/use-auth';
import { authApi } from '@/shared/api';

jest.mock('@/shared/api');

describe('useAuth', () => {
  it('should login successfully', async () => {
    const mockUser = { id: '1', email: 'test@test.com', name: 'Test User' };
    const mockAuthData = { user: mockUser, token: 'token' };
    
    (authApi.login as jest.Mock).mockResolvedValue(mockAuthData);
    
    const { result } = renderHook(() => useAuth());
    
    await act(async () => {
      await result.current.login({
        email: 'test@test.com',
        password: 'password',
      });
    });
    
    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
  });
});
\`\`\`

## Деплой и сборка

### Настройка сборки:
\`\`\`ts
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          shared: ['@/shared/ui'],
        },
      },
    },
  },
});
\`\`\`

### Анализ бандла:
\`\`\`json
{
  "scripts": {
    "build": "vite build",
    "analyze": "vite-bundle-analyzer"
  }
}
\`\`\`

## Монорепозиторий с FSD

### Структура:
\`\`\`
apps/
├── web/                 # Веб приложение
│   └── src/
│       ├── app/
│       ├── pages/
│       └── ...
├── admin/               # Админ панель
│   └── src/
│       ├── app/
│       ├── pages/
│       └── ...
└── packages/
    ├── shared/          # Общие пакеты
    │   ├── ui/
    │   ├── utils/
    │   └── api/
    └── features/        # Общие фичи
        ├── auth/
        └── ...
\`\`\`

## Миграция на FSD

### Пошаговый процесс:
1. **Анализ** текущей структуры
2. **Создание** базовых слоев
3. **Перенос** shared компонентов
4. **Выделение** entities
5. **Организация** features
6. **Создание** pages и widgets
7. **Настройка** маршрутизации
8. **Добавление** ESLint правил

### Инструменты для рефакторинга:
- TypeScript Path Mapping
- ESLint с FSD правилами
- jscodeshift для автоматизации
- Madge для визуализации зависимостей

## Best Practices

### 1. Именование:
- Папки: kebab-case
- Файлы: kebab-case для компонентов, camelCase для утилит
- Экспорты: PascalCase для компонентов, camelCase для остального

### 2. Размер фич:
- Одна фича = одна бизнес-логика
- Избегать слишком больших фич
- Делить на под-фичи при необходимости

### 3. Переиспользование:
- shared для кросспроектного кода
- features для специфичной бизнес-логики
- entities для доменных моделей

### 4. Тестирование:
- Модульные тесты для model
- Компонентные тесты для ui
- Интеграционные тесты для features`,
			tags: [
				'fsd',
				'implementation',
				'architecture',
				'best-practices',
				'testing',
			],
			history: generateReadHistory(9),
		},
	],
	ui: {
		isSearchActive: false,
		searchText: '',
		searchTags: [],
		isCreateThemeActive: false,
		themeToCreateQuestion: null,
		themeToCreateMaterial: null,
		themeToDelete: null,
		questionToDelete: null,
		themeToEdit: null,
		questionToEdit: null,
		materialToEdit: null,
		materialToDelete: null,
	},
};

// Заполняем связи между темами и вопросами/материалами
initialData.themes.forEach((theme) => {
	theme.questions = initialData.questions.filter((q) => q.themeId === theme.id);
	theme.materials = initialData.materials.filter((m) => m.themeId === theme.id);
});

export default initialData;
