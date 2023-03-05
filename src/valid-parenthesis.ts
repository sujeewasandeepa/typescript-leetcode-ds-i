export function isValid(s: string): boolean {
    const stack: string[] = [];
    const map: { [key: string]: string } = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(s[i]);
        } else {
            if (map[stack.pop() as string] !== s[i]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};