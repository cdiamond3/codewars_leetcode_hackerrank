function ensureQuestion(s) {
    if (s.endsWith("?"))
        return s
    else
        !(s.endsWith("?"))
    return `${s}?`
}