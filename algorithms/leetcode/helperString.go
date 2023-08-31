package main

import (
	"regexp"
	"unicode"
)

func RemoveNonAlphanumeric(input string) string {
	pattern := regexp.MustCompile("[^a-zA-Z0-9]+")
	return pattern.ReplaceAllString(input, "")
}

func IsAlphanumeric(char byte) bool {
	runeChar := rune(char)
	return unicode.IsLetter(runeChar) || unicode.IsDigit(runeChar)
}

func LowercaseByteToRune(b byte) rune {
	return unicode.ToLower(rune(b))
}
