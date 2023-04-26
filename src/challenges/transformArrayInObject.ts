const tuple = ['Federer', 'Nadal', 'Djokovic'] as const

type TupleToObject<T extends ReadonlyArray<string | number>> = {
    [k in T[number]]: k
}

const myObj: TupleToObject<typeof tuple> = {
    'Federer': 'Federer',
    'Nadal': 'Nadal',
    'Djokovic': 'Djokovic',
}

