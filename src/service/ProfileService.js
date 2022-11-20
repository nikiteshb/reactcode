import React, { Component } from 'react'

import axios from 'axios';

const profile_base_url = "http://localhost:8000/profile";


class ProfileService {
    getProfiles(){
        return axios.get(profile_base_url)
    }
    createProfile(profile){
        return axios.post(profile_base_url, profile);
    }

    getProfileById(profileId){
        return axios.get(profile_base_url + '/' + profileId);
    }

    updateProfile(profile,profileId){
        return axios.put(profile_base_url + '/' + profileId,profile);
    }

    deleteProfile(profileId){
        return axios.delete(profile_base_url + '/' + profileId);
    }
}

export default new ProfileService()