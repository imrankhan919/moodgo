import { toast } from 'react-toastify'
import LoadingScreen from '../../components/LoadingScreen'
import { getAllRatings } from '../../features/admin/adminSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function AdminRatings() {

  const { ratings, adminLoading, adminSuccess, adminError, adminErrorMessage } = useSelector(state => state.admin)

  const dispatch = useDispatch()

  // Average Rating
  const averageRating = ratings.reduce((acc, rating) => rating.rating + acc, 0) / ratings.length


  useEffect(() => {

    if (!adminError) {
      // Fetch Ratings
      dispatch(getAllRatings())
    }


    if (adminError, adminErrorMessage) {
      toast.error(adminErrorMessage, { position: "top-center", theme: "dark" })
    }


  }, [adminError, adminErrorMessage])


  if (adminLoading) {
    return <LoadingScreen />
  }


  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Ratings & Reviews</h1>
        <p className="text-[#6B7280] text-sm mt-1">Overall platform ratings overview</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Average Rating Card */}
        <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] p-6 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#4F8EF7] to-[#8B5CF6] flex items-center justify-center shadow-[0_0_30px_rgba(79,142,247,0.2)]">
            <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{averageRating}</span>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`text-lg ${i < Math.round(averageRating) ? 'text-yellow-400' : 'text-[#1F1F2E]'}`}>★</span>
              ))}
            </div>
            <p className="text-[#6B7280] text-sm">Based on {ratings.length} reviews</p>
          </div>
        </div>
      </div>

      {/* Individual Ratings Table */}
      <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1F1F2E]">
          <h2 className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>Recent Reviews</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1F1F2E]">
                {['User', 'Review', 'Rating', 'Date'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-[#6B7280] text-xs uppercase tracking-wider font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ratings.map(rating => (
                <tr key={rating._id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {/* <img src={comment.avatar} alt={comment.userName} className="w-8 h-8 rounded-full border border-[#1F1F2E]" /> */}
                      <span className="text-white text-sm">{rating?.user?.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#9CA3AF] text-sm max-w-xs truncate">{rating.text}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`text-xs ${i < rating.rating ? 'text-yellow-400' : 'text-[#1F1F2E]'}`}>★</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{new Date(rating.createdAt).toLocaleDateString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AdminRatings
