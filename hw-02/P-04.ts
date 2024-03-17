function datePerson(name: string, ci: string, email: string){
    const date = `${name} ${ci} ${email}`
    console.log(`${date}`);
    return date;
}

datePerson('Fernando','6075842','fernando@gmail.com');