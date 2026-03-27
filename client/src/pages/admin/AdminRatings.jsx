import { toast } from 'react-toastify'
import LoadingScreen from '../../components/LoadingScreen'
import { ratings, comments } from '../../data/mockData'
import { getAllRatings } from '../../features/admin/adminSlice'
import { useDispatch, useSelector } from 'react-redux'

function AdminRatings() {

  //  const { ratings, adminLoading, adminSuccess, adminError, adminErrorMessage } = useSelector(state => state.admin)

  //   const dispatch = useDispatch()

  //   const maxDistribution = Math.max(...Object.values(ratings.distribution))


  //   useEffect(() => {

  //     if (!adminError) {
  //       // Fetch Users
  //       dispatch(getAllRatings())
  //     }


  //     if (adminError, adminErrorMessage) {
  //       toast.error(adminErrorMessage, { position: "top-center", theme: "dark" })
  //     }


  //   }, [adminError, adminErrorMessage])


  //   if (adminLoading) {
  //     return <LoadingScreen />
  //   }


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
            <span className="text-white text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{ratings.averageRating}</span>
          </div>
          <div>
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i} className={`text-lg ${i < Math.round(ratings.averageRating) ? 'text-yellow-400' : 'text-[#1F1F2E]'}`}>★</span>
              ))}
            </div>
            <p className="text-[#6B7280] text-sm">Based on {ratings.totalReviews} reviews</p>
          </div>
        </div>

        {/* Distribution Card */}
        <div className="bg-[#111118] rounded-2xl border border-[#1F1F2E] p-6">
          <h3 className="text-white text-sm font-bold mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>Rating Distribution</h3>
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map(star => (
              <div key={star} className="flex items-center gap-3">
                <span className="text-white text-sm w-4 text-right">{star}</span>
                <span className="text-yellow-400 text-sm">★</span>
                <div className="flex-1 h-2.5 bg-[#1F1F2E] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#4F8EF7] to-[#8B5CF6] transition-all duration-500"
                    style={{ width: `${(ratings.distribution[star] / maxDistribution) * 100}%` }}
                  />
                </div>
                <span className="text-[#6B7280] text-xs w-8 text-right">{ratings.distribution[star]}</span>
              </div>
            ))}
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
              {comments.map(comment => (
                <tr key={comment.id} className="border-b border-[#1F1F2E] last:border-0 hover:bg-[#1F1F2E]/30 transition-all duration-300">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={comment.avatar} alt={comment.userName} className="w-8 h-8 rounded-full border border-[#1F1F2E]" />
                      <span className="text-white text-sm">{comment.userName}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#9CA3AF] text-sm max-w-xs truncate">{comment.text}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`text-xs ${i < comment.rating ? 'text-yellow-400' : 'text-[#1F1F2E]'}`}>★</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[#6B7280] text-sm">{comment.createdAt}</td>
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
