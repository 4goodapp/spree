require 'spec_helper'

describe Spree::V2::Storefront::WishlistSerializer do
  subject { described_class.new(wishlist) }

  let!(:wishlist) { create(:wishlist) }
  let!(:wished_variant) { create(:wished_variant, wishlist: wishlist, variant: create(:variant), quantity: 1 ) }

  it { expect(subject.serializable_hash).to be_kind_of(Hash) }

  it do
    expect(subject.serializable_hash).to eq(
      {
        data: {
          id: wishlist.id.to_s,
          type: :wishlist,
          attributes: {
            name: wishlist.name,
            token: wishlist.token,
            is_private: wishlist.is_private,
            is_default: wishlist.is_default
          },
          relationships: {
            user: {
              data:{
                id: wishlist.user.id.to_s,
                type: :user
              }
            },
            wished_variants: {
              data: [
                {
                  id: wishlist.wished_variants.first.id.to_s,
                  type: :wished_variant
                }
              ]
            }
          }
        }
      }
    )
  end
end
