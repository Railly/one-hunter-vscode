// Preprocessor directives
#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <algorithm>
#include <string>
#include <memory>
#include <functional>
#include <exception>
#include <thread>
#include <mutex>
#include <chrono>
#include <cctype>  // For character functions
#include <cmath>   // Math functions like sin, cos

#define PI 3.141592653589793
#define SQUARE(x) ((x) * (x))

// Namespaces
using namespace std;

// Constants
constexpr int MAX_VALUE = 100;
const double GRAVITY = 9.8;

// Enums
enum Color { RED, GREEN, BLUE };
enum class Shape : int { Circle = 1, Square, Triangle };

// Structs
struct Point {
    int x;
    int y;
};

// Unions
union Variant {
    int i;
    float f;
    char c;
};

// Classes with inheritance
class Base {
public:
    virtual ~Base() = default;
    virtual void display() const {
        cout << "Base class" << endl;
    }
protected:
    int protectedVar = 42;
private:
    string privateStr = "secret";
};

class Derived : public Base {
public:
    void display() const override {
        cout << "Derived class" << endl;
    }
    explicit Derived(int val) : value(val) {}
private:
    int value;
};

// Templates
template <typename T>
class Stack {
private:
    vector<T> elements;
public:
    void push(const T& item) {
        elements.push_back(item);
    }
    T pop() {
        if (elements.empty()) {
            throw out_of_range("Stack underflow");
        }
        T top = elements.back();
        elements.pop_back();
        return top;
    }
};

template <typename T, int N>
T addValue(T x) {
    return x + N;
}

// Lambdas and function objects
auto lambdaFunc = [](int a, int b) -> int {
    return a + b;
};

function<int(int, int)> adder = lambdaFunc;

// Main function with various elements
int main() {
    // Variables of different types
    bool flag = true;
    char ch = 'A';
    unsigned short us = 65535;
    int integer = -123;
    unsigned int ui = 4294967295U;
    long long ll = 9223372036854775807LL;
    float fl = 3.14f;
    double dbl = 2.71828;
    long double ld = 1.618033988749895L;
    string str = "Hello, World!";
    wstring wstr = L"Wide string";
    const char* cstr = "C-style string";
    char arr[] = "Array string";

    // Pointers and references
    int* ptr = &integer;
    int& ref = integer;
    unique_ptr<int> smartPtr = make_unique<int>(10);
    shared_ptr<Base> sharedBase = make_shared<Derived>(5);

    // Arrays and STL containers
    int fixedArray[5] = {1, 2, 3, 4, 5};
    vector<int> vec = {10, 20, 30};
    map<string, int> mp = {{"one", 1}, {"two", 2}};
    set<double> st = {1.1, 2.2, 3.3};

    // Algorithms
    sort(vec.begin(), vec.end());
    auto it = find(vec.begin(), vec.end(), 20);
    if (it != vec.end()) {
        cout << "Found: " << *it << endl;
    }

    // Loops
    for (int i = 0; i < 5; ++i) {
        cout << i << " ";
    }
    cout << endl;

    int j = 0;
    while (j < 5) {
        cout << j << " ";
        ++j;
    }
    cout << endl;

    int k = 0;
    do {
        cout << k << " ";
        ++k;
    } while (k < 5);
    cout << endl;

    for (auto& elem : vec) {
        elem *= 2;
    }

    // Conditionals
    if (flag) {
        cout << "True" << endl;
    } else if (integer > 0) {
        cout << "Positive" << endl;
    } else {
        cout << "Negative or zero" << endl;
    }

    switch (ch) {
        case 'A':
            cout << "Apple" << endl;
            break;
        case 'B':
            cout << "Banana" << endl;
            [[fallthrough]];
        default:
            cout << "Default" << endl;
    }

    // Ternary operator
    string result = (integer > 0) ? "Positive" : "Non-positive";

    // Functions and calls
    cout << addValue<int, 5>(10) << endl;
    cout << lambdaFunc(3, 4) << endl;

    // Exceptions
    try {
        Stack<int> stk;
        stk.push(1);
        cout << stk.pop() << endl;
        cout << stk.pop() << endl;  
    } catch (const exception& e) {
        cerr << "Caught: " << e.what() << endl;
    }

    // Threads and concurrency
    mutex mtx;
    thread th([&]() {
        lock_guard<mutex> lock(mtx);
        cout << "Thread running" << endl;
        this_thread::sleep_for(chrono::seconds(1));
    });
    th.join();

    // Math and other operations
    double sine = sin(PI / 2);
    int squared = SQUARE(5);
    bool isAlpha = isalpha(ch);

    // Casting
    static_cast<double>(integer);
    reinterpret_cast<void*>(ptr);


    // Bitwise operators
    int bitAnd = 5 & 3;
    int bitOr = 5 | 3;
    int bitXor = 5 ^ 3;
    int bitNot = ~5;
    int leftShift = 5 << 1;
    int rightShift = 5 >> 1;

    // Logical operators
    bool logAnd = flag && true;
    bool logOr = flag || false;
    bool logNot = !flag;

    // Assignment and compound
    integer += 10;
    fl *= 2.0;
    ui %= 100;

    // Increment/decrement
    ++j;
    k--;

    // Sizeof and alignof
    size_t sz = sizeof(int);
    alignas(16) int alignedVar;

    // New and delete
    int* dyn = new int(100);
    delete dyn;
    int* dynArr = new int[10];
    delete[] dynArr;

    // Polymorphism
    Base* basePtr = new Derived(7);
    basePtr->display();
    delete basePtr;


    // Inline and noexcept
    inline void inlineFunc() noexcept {
        // Do nothing
    }

    // Variadic templates (example declaration)
    template<typename... Args>
    void variadic(Args... args);

    // Raw string literals
    string rawStr = R"(Raw string with "quotes" and \escapes)";

    // User-defined literals
    long double operator"" _km(long double val) { return val * 1000; }
    auto distance = 5.5_km;

    // Attributes
    [[nodiscard]] int importantFunc() { return 42; }
    [[maybe_unused]] int unusedVar = 0;



    return 0;
}

// More functions outside main
void friendFunc() {}
template<typename... Args>
void variadic(Args... args) {}

// Overloaded operators
Point operator+(const Point& a, const Point& b) {
    return {a.x + b.x, a.y + b.y};
}

ostream& operator<<(ostream& os, const Point& p) {
    os << "(" << p.x << ", " << p.y << ")";
    return os;
}