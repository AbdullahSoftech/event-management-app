import React from 'react'
import bird from '../../assets/bird.png'

const BirdIllustration = () => {
    return (
        <div className="hidden md:flex bg-[#A5C5B7] min-h-screen items-center justify-center p-6">
            <div className="text-center">
                <img
                    src={bird}
                    alt="Bird Illustration"
                    className="w-3/4 mx-auto mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-700">Plan, Organize, Succeed</h2>
                <p className="text-sm text-gray-600">
                    Seamlessly manage your events with GoEvent – your trusted partner for streamlined event planning and coordination.
                </p>
            </div>
        </div>
    )
}

export default BirdIllustration
