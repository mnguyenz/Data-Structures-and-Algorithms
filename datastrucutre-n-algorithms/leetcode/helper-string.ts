export function ispalindromicString(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

export function getLastChar(str): string {
    return str.slice(-1);
}

export function getFirstChar(str): string {
    return str.charAt(0);
}