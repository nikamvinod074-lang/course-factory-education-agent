export const questionBank = [

  // =====================================
  // PYTHON
  // =====================================

  // PYTHON - BEGINNER
  {
    topic: "Python",
    difficulty: "Beginner",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "fun", "define"],
    answer: "def",
  },
  {
    topic: "Python",
    difficulty: "Beginner",
    question: "What is the output of print(5 + 3)?",
    options: ["53", "8", "2", "Error"],
    answer: "8",
  },
  {
    topic: "Python",
    difficulty: "Beginner",
    question: "Which data type is used to store True or False?",
    options: ["int", "str", "bool", "float"],
    answer: "bool",
  },

  // PYTHON - INTERMEDIATE
  {
    topic: "Python",
    difficulty: "Intermediate",
    question: "What is the output of len([10, 20, 30, 40])?",
    options: ["3", "4", "5", "40"],
    answer: "4",
  },
  {
    topic: "Python",
    difficulty: "Intermediate",
    question: "Which method adds an item at the end of a list?",
    options: ["add()", "insert()", "append()", "extendOne()"],
    answer: "append()",
  },
  {
    topic: "Python",
    difficulty: "Intermediate",
    question: "What is the output of [10, 20, 30, 40][1:3]?",
    options: ["[10, 20]", "[20, 30]", "[20, 30, 40]", "[10, 20, 30]"],
    answer: "[20, 30]",
  },

  // PYTHON - ADVANCED
  {
    topic: "Python",
    difficulty: "Advanced",
    question: "Which keyword is used to handle exceptions?",
    options: ["catch", "try", "error", "handle"],
    answer: "try",
  },
  {
    topic: "Python",
    difficulty: "Advanced",
    question: "What does a lambda function represent?",
    options: ["An anonymous function", "A class", "A loop", "A module"],
    answer: "An anonymous function",
  },
  {
    topic: "Python",
    difficulty: "Advanced",
    question: "Which Python feature allows a function to call itself?",
    options: ["Iteration", "Recursion", "Inheritance", "Encapsulation"],
    answer: "Recursion",
  },

  // =====================================
  // C PROGRAMMING
  // =====================================

  // C - BEGINNER
  {
    topic: "C Programming",
    difficulty: "Beginner",
    question: "Which function is the entry point of a C program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: "main()",
  },
  {
    topic: "C Programming",
    difficulty: "Beginner",
    question: "Which symbol is used to end a statement in C?",
    options: [":", ".", ";", ","],
    answer: ";",
  },
  {
    topic: "C Programming",
    difficulty: "Beginner",
    question: "Which format specifier is used to print an integer?",
    options: ["%f", "%c", "%d", "%s"],
    answer: "%d",
  },

  // C - INTERMEDIATE
  {
    topic: "C Programming",
    difficulty: "Intermediate",
    question: "Which operator is used to get the address of a variable?",
    options: ["*", "&", "%", "#"],
    answer: "&",
  },
  {
    topic: "C Programming",
    difficulty: "Intermediate",
    question: "Array indexing in C starts from which number?",
    options: ["1", "-1", "0", "2"],
    answer: "0",
  },
  {
    topic: "C Programming",
    difficulty: "Intermediate",
    question: "Which loop executes its body at least once?",
    options: ["for", "while", "do-while", "nested for"],
    answer: "do-while",
  },

  // C - ADVANCED
  {
    topic: "C Programming",
    difficulty: "Advanced",
    question: "Which function is used to allocate memory dynamically?",
    options: ["printf()", "malloc()", "scanf()", "strlen()"],
    answer: "malloc()",
  },
  {
    topic: "C Programming",
    difficulty: "Advanced",
    question: "Which header file declares malloc()?",
    options: ["stdio.h", "string.h", "stdlib.h", "math.h"],
    answer: "stdlib.h",
  },
  {
    topic: "C Programming",
    difficulty: "Advanced",
    question: "What does a pointer store?",
    options: ["Only characters", "A memory address", "Only decimal values", "A loop"],
    answer: "A memory address",
  },

  // =====================================
  // C++
  // =====================================

  // C++ - BEGINNER
  {
    topic: "C++",
    difficulty: "Beginner",
    question: "Which language feature supports object-oriented programming in C++?",
    options: ["Classes", "HTML tags", "SQL tables", "CSS selectors"],
    answer: "Classes",
  },
  {
    topic: "C++",
    difficulty: "Beginner",
    question: "Which stream is commonly used for output in C++?",
    options: ["cin", "cout", "scanf", "input"],
    answer: "cout",
  },
  {
    topic: "C++",
    difficulty: "Beginner",
    question: "Which header is commonly used for cout and cin?",
    options: ["iostream", "stdio.h", "string.h", "stdlib.h"],
    answer: "iostream",
  },

  // C++ - INTERMEDIATE
  {
    topic: "C++",
    difficulty: "Intermediate",
    question: "Which concept allows the same function name with different parameters?",
    options: ["Overloading", "Overriding", "Inheritance", "Abstraction"],
    answer: "Overloading",
  },
  {
    topic: "C++",
    difficulty: "Intermediate",
    question: "Which access specifier makes class members accessible only within the class?",
    options: ["public", "private", "protected", "global"],
    answer: "private",
  },
  {
    topic: "C++",
    difficulty: "Intermediate",
    question: "Which symbol is used to access a member through an object?",
    options: ["->", ".", "::", "&"],
    answer: ".",
  },

  // C++ - ADVANCED
  {
    topic: "C++",
    difficulty: "Advanced",
    question: "Which keyword is used to declare a virtual function?",
    options: ["static", "virtual", "friend", "inline"],
    answer: "virtual",
  },
  {
    topic: "C++",
    difficulty: "Advanced",
    question: "Which feature allows one class to acquire properties of another?",
    options: ["Polymorphism", "Inheritance", "Compilation", "Iteration"],
    answer: "Inheritance",
  },
  {
    topic: "C++",
    difficulty: "Advanced",
    question: "Which STL container stores unique sorted elements?",
    options: ["vector", "list", "set", "queue"],
    answer: "set",
  },

  // =====================================
  // C#
  // =====================================

  // C# - BEGINNER
  {
    topic: "C#",
    difficulty: "Beginner",
    question: "Which keyword is used to declare a class in C#?",
    options: ["Class", "class", "define", "structclass"],
    answer: "class",
  },
  {
    topic: "C#",
    difficulty: "Beginner",
    question: "Which method is commonly used to display output in C#?",
    options: ["Console.WriteLine()", "print()", "echo()", "cout"],
    answer: "Console.WriteLine()",
  },
  {
    topic: "C#",
    difficulty: "Beginner",
    question: "Which data type stores whole numbers in C#?",
    options: ["string", "bool", "int", "char"],
    answer: "int",
  },

  // C# - INTERMEDIATE
  {
    topic: "C#",
    difficulty: "Intermediate",
    question: "Which keyword creates an object in C#?",
    options: ["create", "new", "object", "make"],
    answer: "new",
  },
  {
    topic: "C#",
    difficulty: "Intermediate",
    question: "Which concept hides internal implementation details?",
    options: ["Abstraction", "Iteration", "Compilation", "Looping"],
    answer: "Abstraction",
  },
  {
    topic: "C#",
    difficulty: "Intermediate",
    question: "Which keyword is used to inherit a class in C#?",
    options: ["inherits", "extends", ":", "implements"],
    answer: ":",
  },

  // C# - ADVANCED
  {
    topic: "C#",
    difficulty: "Advanced",
    question: "Which keyword is used to define an asynchronous method?",
    options: ["async", "await", "thread", "parallel"],
    answer: "async",
  },
  {
    topic: "C#",
    difficulty: "Advanced",
    question: "Which keyword is used to wait for an asynchronous operation?",
    options: ["yield", "await", "return", "lock"],
    answer: "await",
  },
  {
    topic: "C#",
    difficulty: "Advanced",
    question: "Which feature allows a class to implement multiple interfaces?",
    options: ["Multiple class inheritance", "Interface implementation", "Method hiding", "Constructor chaining"],
    answer: "Interface implementation",
  },

  // =====================================
  // .NET
  // =====================================

  // .NET - BEGINNER
  {
    topic: ".NET",
    difficulty: "Beginner",
    question: "What is .NET?",
    options: ["A database only", "A development platform", "An operating system", "A web browser"],
    answer: "A development platform",
  },
  {
    topic: ".NET",
    difficulty: "Beginner",
    question: "Which language is commonly used for .NET development?",
    options: ["C#", "HTML only", "CSS only", "XML only"],
    answer: "C#",
  },
  {
    topic: ".NET",
    difficulty: "Beginner",
    question: "What does CLR stand for?",
    options: ["Common Language Runtime", "Code Link Reader", "Computer Logic Runtime", "Common Library Resource"],
    answer: "Common Language Runtime",
  },

  // .NET - INTERMEDIATE
  {
    topic: ".NET",
    difficulty: "Intermediate",
    question: "What is the main role of the CLR?",
    options: ["Designing webpages", "Executing .NET code", "Managing images", "Creating databases"],
    answer: "Executing .NET code",
  },
  {
    topic: ".NET",
    difficulty: "Intermediate",
    question: "Which technology is commonly used to build web applications in .NET?",
    options: ["ASP.NET Core", "Photoshop", "Excel", "PowerPoint"],
    answer: "ASP.NET Core",
  },
  {
    topic: ".NET",
    difficulty: "Intermediate",
    question: "What is NuGet used for?",
    options: ["Managing packages", "Editing photos", "Creating operating systems", "Running hardware tests"],
    answer: "Managing packages",
  },

  // .NET - ADVANCED
  {
    topic: ".NET",
    difficulty: "Advanced",
    question: "Which feature automatically manages unused memory in .NET?",
    options: ["Garbage Collection", "Manual Looping", "CSS Rendering", "File Compression"],
    answer: "Garbage Collection",
  },
  {
    topic: ".NET",
    difficulty: "Advanced",
    question: "What is dependency injection used for?",
    options: ["Reducing class dependencies", "Increasing file size", "Creating images", "Changing data types"],
    answer: "Reducing class dependencies",
  },
  {
    topic: ".NET",
    difficulty: "Advanced",
    question: "What is Entity Framework Core?",
    options: ["An ORM framework", "A text editor", "An operating system", "A programming language"],
    answer: "An ORM framework",
  },

  // =====================================
  // JAVA
  // =====================================

  // JAVA - BEGINNER
  {
    topic: "Java",
    difficulty: "Beginner",
    question: "Which keyword is used to create a class in Java?",
    options: ["Class", "class", "define", "newclass"],
    answer: "class",
  },
  {
    topic: "Java",
    difficulty: "Beginner",
    question: "Which method is the entry point of a Java application?",
    options: ["start()", "main()", "run()", "execute()"],
    answer: "main()",
  },
  {
    topic: "Java",
    difficulty: "Beginner",
    question: "Which keyword creates an object in Java?",
    options: ["class", "new", "this", "static"],
    answer: "new",
  },

  // JAVA - INTERMEDIATE
  {
    topic: "Java",
    difficulty: "Intermediate",
    question: "Which collection stores elements as key-value pairs?",
    options: ["ArrayList", "HashMap", "HashSet", "LinkedList"],
    answer: "HashMap",
  },
  {
    topic: "Java",
    difficulty: "Intermediate",
    question: "Which keyword prevents a method from being overridden?",
    options: ["static", "final", "public", "abstract"],
    answer: "final",
  },
  {
    topic: "Java",
    difficulty: "Intermediate",
    question: "Which keyword is used to inherit a class in Java?",
    options: ["implements", "inherits", "extends", "super"],
    answer: "extends",
  },

  // JAVA - ADVANCED
  {
    topic: "Java",
    difficulty: "Advanced",
    question: "Which interface is commonly used to create a thread task?",
    options: ["Runnable", "Serializable", "Comparable", "Cloneable"],
    answer: "Runnable",
  },
  {
    topic: "Java",
    difficulty: "Advanced",
    question: "Which keyword ensures that a variable's value is visible across threads?",
    options: ["volatile", "final", "transient", "native"],
    answer: "volatile",
  },
  {
    topic: "Java",
    difficulty: "Advanced",
    question: "Which Java feature allows behavior to be passed as a function?",
    options: ["Lambda expressions", "Constructors", "Packages", "Primitive types"],
    answer: "Lambda expressions",
  },

  // =====================================
  // ADVANCED JAVA
  // =====================================

  // ADVANCED JAVA - BEGINNER
  {
    topic: "Advanced Java",
    difficulty: "Beginner",
    question: "Which Java technology is used to connect Java applications to databases?",
    options: ["JDBC", "JDK", "JRE", "JVM"],
    answer: "JDBC",
  },
  {
    topic: "Advanced Java",
    difficulty: "Beginner",
    question: "Which object is used to send a request from a Java servlet?",
    options: ["HttpServletRequest", "Scanner", "FileReader", "PrintWriter"],
    answer: "HttpServletRequest",
  },
  {
    topic: "Advanced Java",
    difficulty: "Beginner",
    question: "What does JSP stand for?",
    options: ["Java Server Pages", "Java Standard Program", "Java Script Package", "Java System Process"],
    answer: "Java Server Pages",
  },

  // ADVANCED JAVA - INTERMEDIATE
  {
    topic: "Advanced Java",
    difficulty: "Intermediate",
    question: "Which JDBC interface is used to execute SQL queries?",
    options: ["Connection", "Statement", "DriverManager", "ResultSet"],
    answer: "Statement",
  },
  {
    topic: "Advanced Java",
    difficulty: "Intermediate",
    question: "Which method handles HTTP GET requests in a servlet?",
    options: ["doPost()", "doGet()", "serviceGet()", "getRequest()"],
    answer: "doGet()",
  },
  {
    topic: "Advanced Java",
    difficulty: "Intermediate",
    question: "Which JDBC object represents the connection to a database?",
    options: ["Statement", "Connection", "ResultSet", "PreparedStatement"],
    answer: "Connection",
  },

  // ADVANCED JAVA - ADVANCED
  {
    topic: "Advanced Java",
    difficulty: "Advanced",
    question: "Which JDBC interface helps prevent SQL injection through parameterized queries?",
    options: ["Statement", "PreparedStatement", "ResultSet", "Driver"],
    answer: "PreparedStatement",
  },
  {
    topic: "Advanced Java",
    difficulty: "Advanced",
    question: "Which annotation is used to map a URL to a servlet?",
    options: ["@Override", "@WebServlet", "@Entity", "@Autowired"],
    answer: "@WebServlet",
  },
  {
    topic: "Advanced Java",
    difficulty: "Advanced",
    question: "Which technology is commonly used to build REST APIs in Java?",
    options: ["Spring Boot", "JDBC only", "JSP only", "AWT"],
    answer: "Spring Boot",
  },
];