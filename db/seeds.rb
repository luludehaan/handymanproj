5.times do
  worker = Worker.create(
    name: Faker::FunnyName.two_word_name,
    title: Faker::Job.position,
    experience: Faker::Job.key_skill
  )
  3.times do
    Service.create(
      job: Faker::Job.field,
      description: Faker::Lorem.paragraph,
      price: Faker::Number.digit,
      worker_id: worker.id
    )
  end
end
puts 'Data has been seeded'