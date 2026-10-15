# Multi-Stage AI Workflow Lab

## 1. Problem

The `calculateTotal()` function could produce incorrect results when the price list contained strings or invalid numbers such as `NaN`.

## 2. Tools Used

- ChatGPT (Chat UX): Analyzed the bug, identified the expected behavior, and created a structured fix plan.
- GitHub Copilot (IDE UX): Used the plan to implement the fix in `calculator.js`.
- Node.js: Ran the code to verify the results.

## 3. Workflow Diagram

```text
ChatGPT (Chat UX)
       |
       | Produces a structured bug report and fix plan
       v
GitHub Copilot (IDE UX)
       |
       | Implements the fix in calculator.js
       v
Node.js
       |
       | Runs the test cases
       v
Verified Results
```

## 4. Implementation

Copilot updated `calculateTotal()` to add only finite numeric values, ignoring strings and invalid numbers.

## 5. Test Results

| Input               | Expected Output | Actual Output |
| ------------------- | --------------: | ------------: |
| `[100, 200, 300]`   |             600 |           600 |
| `[]`                |               0 |             0 |
| `[100, "200", 300]` |             400 |           400 |
| `[100, NaN, 200]`   |             300 |           300 |

All four test cases passed.

## 6. Adaptability

This workflow can be adapted to other programming languages and IDE assistants. The structured bug report can be passed to another AI coding tool.

## 7. Conclusion

Chaining a chat-based AI with an IDE-based AI helped turn a bug report into an implemented and tested fix. The final code was verified using Node.js.
