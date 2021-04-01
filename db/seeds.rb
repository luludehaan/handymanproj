3.times do
  worker = Worker.create(
    name: Faker::FunnyName.two_word_name,
    title: Faker::Job.position,
    experience: Faker::Job.key_skill
  )
  # 2.times do
    service = Service.create(
      job: Faker::Job.field,
      description: Faker::Lorem.paragraph,
      price: Faker::Commerce.price(range: 0..10.0, as_string: true),
      worker_id: worker.id
    )
  # end

  # 2.times do 
    # Comment.create(
    #   author: Faker::Book.author,
    #   body: Faker::Lorem.paragraph,
    #   date: Faker::Date.between(from: '2014-09-23', to: '2021-09-25'),
    #   # service_id: service.id
    # )
  # end
end
puts 'Data has been seeded'