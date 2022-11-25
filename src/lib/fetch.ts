
export const fetchData = ( endpoint : string, data : any, method='GET' ) => {

    const url = `${endpoint}`;//localhost:4000/api/event

    if ( method === 'GET' ) {
        return fetch( url );
    }else{
        return fetch( url,{
            method,
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        });
    }
}


export const fetchDataToken = ( endpoint : string, data : any = undefined , method='GET' ) => {

    const url = `${endpoint}`;//localhost:4000/api/event
    const token = localStorage.getItem('token') || '';

    if ( method === 'GET' || method === 'DELETE' ) {
        return fetch( url, {
            method,
            headers :{
                'Authorization' : `bearer ${token}`
            }
        });
    }else{
        return fetch( url,{
            method,
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `bearer ${token}`
            },
            body : JSON.stringify( data )
        });
    }
}