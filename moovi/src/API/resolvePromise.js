// TODO
function resolvePromise(promiseToResolve, promiseState, notify) {
    if (!promiseToResolve) return <div>No data</div> // check if no promise here
    promiseState.promise = promiseToResolve
    promiseState.data = null
    promiseState.error = null
    // TW3
    // notify is a ACB
    if (notify) notify()
    
    function saveDataACB(result){
        if(promiseState.promise !== promiseToResolve) return
        promiseState.data = result
        if (notify) notify({promiseStateData: result})
    }
    function saveErrorACB(err){
        if(promiseState.promise !== promiseToResolve) return
        promiseState.error = err
        if (notify) notify({promiseStateError: err})
    }
    promiseToResolve.then(saveDataACB).catch(saveErrorACB)
}

export default resolvePromise