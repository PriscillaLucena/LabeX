export const goToLogin =(navigate)=>{
    navigate("/login")
}

export const goToHome =(navigate)=>{
    navigate("/")
}

export const goToAdminTripsList =(navigate)=>{
    navigate("/admin/trips/list")
}

export const goToDetailTripsList =(navigate, id)=>{
    navigate(`/admin/trips/${id}`)
}

export const goToTripsList =(navigate)=>{
    navigate("/trips/list")
}

export const goToAdminTipsCreate =(navigate)=>{
    navigate("/admin/trips/create")
}

export const goToAplly =(navigate, id)=>{
    navigate(`/trips/apply/${id}`)
}

export const goToErrorPage =(navigate)=>{
    navigate("*")
}

